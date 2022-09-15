import "./sign-up.css";
import { DiScrum } from "react-icons/di";
import content from "../static/sign-up-content";

const SignUp = () => {
  return (
    <div className="signupSection sign-up">
      <div className="info">
        <h2>Unlimited Free ChatScrum Boards</h2>
        <DiScrum aria-hidden="true" className='icon ion-ios-ionic-outline"' />

        <p>Ensures a good pace of work</p>
      </div>

      <form className="signupForm" name="signupform">
        <h1>Don't Have an account?</h1>
        <h3>sign up here!</h3>
        <ul>
          {content.inputs.map((input, key) => {
            return (
              <li key={key}>
                <input
                  className="inputFields"
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                />
              </li>
            );
          })}
        
          <li>
            <label className="options" for="options">
              User type
            </label>
            <select disabled={false} id="options">
              <option selected className="selected">
                Select User type
              </option>
              <option value="Developer">Developer</option>
              <option value="Owner">Owner</option>
            </select>
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
      </form>
    </div>
  );
};

export default SignUp;
