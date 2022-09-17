import { DiScrum } from "react-icons/di";
import {  Outlet } from "react-router-dom";
import "./auth.scss";



const Auth = () => {
  
  return (
    <div className="authentication auth">
      <div className="info">
        <h2>Unlimited Free ChatScrum Boards</h2>
        <DiScrum aria-hidden="true" className='icon ion-ios-ionic-outline"' />

        <p>Ensures a good pace of work</p>
      </div>

      <div className="auth-section">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
