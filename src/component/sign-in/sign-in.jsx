import { Link } from "react-router-dom";
import "../sign-up/sign-up.css";
import content from "../static/sign-in-content";
import { useForm } from "react-hook-form";



const SignIn = (data) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password && data.email) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="signupForm"
      name="signupform"
    >
      <h1>Have an account Already?</h1>
      <h3>sign in here!</h3>
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
          <Link to="/scrumboard">
            <button
              className=""
              type={"submit"}
              name="signUp"
              alt="signUp"
              id="signUp-btn"
            >
              SIGN IN
            </button>
          </Link>
        </li>
      </ul>
      <p>
        Don't have an account?{" "}
        <Link to="/sign-up" className="links">
          Sign up
        </Link>{" "}
      </p>
      <p>
        <Link to="/" className="links">
          Back to Homepage
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
