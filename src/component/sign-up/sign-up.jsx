import './sign-up.css'
import {DiScrum} from 'react-icons/di'


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
          <ul className="noBullet">
            <li>
              <label for="name">Fullname</label>
              <input
                className="inputFields"
                type="text"
                name="name"
                placeholder="Full name"
              />
            </li>

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
              <label className="options" for="options">
                User type
              </label>
              <select disabled={false} id="options">
                <option selected className='selected'>Select User type</option>
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
}
 
export default SignUp;