import "../sign-up/sign-up.css";
import { DiScrum } from "react-icons/di";
import content from "../static/sign-in-content";

const SignIn = () => {
  return (
    <div className="signupSection sign-up">
      <div className="info">
        <h2>Unlimited Free ChatScrum Boards</h2>
        <DiScrum aria-hidden="true" className='icon ion-ios-ionic-outline"' />

        <p>Ensures a good pace of work</p>
      </div>

      <form className="signupForm" name="signupform">
        <h1>Have an account Already?</h1>
        <h3>sign in here!</h3>
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
            <button
              className=""
              type="submit"
              name="signUp"
              alt="signUp"
              id="signUp-btn"
            >
              SIGN IN
            </button>
          </li>
        </ul>
        <p>Don't have an account? Sign up</p>
      </form>
    </div>
  );
};

export default SignIn;
