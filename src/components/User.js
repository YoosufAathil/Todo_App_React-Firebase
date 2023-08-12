import React from "react";
import avatar from "../components/Images/avatar.png"
function User() {
    return (
        <div className="User"> 
        <div className="logo">
            <img src={avatar} alt="avatar" />
        </div>
        <div className="info">
            <p> Aathil Prince </p>
            <a href="#" >Logout  </a>
        </div>
        </div>
    )
}

export default User