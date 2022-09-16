import "./sign-up.css";
import { DiScrum } from "react-icons/di";
import content from "../static/sign-up-content";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const SignUp = () => {

  const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup
      .string()
      .required("please enter a valid email")
      .matches(
        /^\S+@\S+\.\S+$/,
        "valid email follow this pattern: email@example.com"
      ),
    password: yup
      .string()
      .required("Please enter a valid password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
        "Must contain 8 character, one Uppuercase, one lowercase, one number and one special charaacter"
      ),
    select: yup.string().required("Please select a user type").min(2)
  });

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="signupSection sign-up">
      <div className="info">
        <h2>Unlimited Free ChatScrum Boards</h2>
        <DiScrum aria-hidden="true" className='icon ion-ios-ionic-outline"' />

        <p>Ensures a good pace of work</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signupForm"
        name="signupform"
      >
        <h1>Don't Have an account?</h1>
        <h3>sign up here!</h3>
        <ul>
          {content.inputs.map((input, key) => {
            return (
              <li key={key}>
                <input
                  className={`inputFields ${
                    errors[input.name] ? `errorInput` : null
                  }`}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  {...register(input.name)}
                />
                <p className="message">{errors[input.name]?.message}</p>
              </li>
            );
          })}

          <li>
            <label className="options" htmlFor="options">
              User type
            </label>
            <select
              disabled={false}
              className={`inputFields ${errors.select ? `errorInput` : null}`}
              {...register("select")}
            >
              <option value="">Select User type</option>
              <option value="Developer">Developer</option>
              <option value="Owner">Owner</option>
            </select>
            {errors.select && (
              <p className="message">{errors.select.message}</p>
            )}
          </li>
          <li>
            <button
              className=""
              type="submit"
              name="signUp"
              alt="signUp"
              id="signUp-btn"
            >
              SIGN UP
            </button>
          </li>
        </ul>

        <p>
          {" "}
          Do you have an account?{" "}
          <Link to="/sign-in" className="links">
            Sign In
          </Link>
        </p>
        <p>
          <Link to="/" className="links">
            Back to homepage
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
