import "../sign-up/sign-up.css";
import { DiScrum } from "react-icons/di";

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
        <ul className="noBullet">
          <li>
            <label for="email">Email</label>
            <input
              className="inputFields"
              type="email"
              name="email"
              placeholder="Email"
            />
          </li>
          <li>
            <label for="password">password</label>
            <input
              className="inputFields"
              type="password"
              name="password"
              placeholder="Password"
            />
          </li>

          <li>
            <label for="project">Project name</label>
            <input
              className="inputFields"
              type="text"
              name="name"
              placeholder="Project Name"
            />
          </li>

          
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
