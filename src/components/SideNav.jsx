import React from "react";
import "./SideNav.css"

function SideNav(){
    return (
      <div className="sideNav-main-container">
        <a href="/home">
          <img src="" alt="" />
        </a>
        <p></p>
        <ul className="links-icon">
          <li className="home-icon">
            <a href="/home">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9643/9643115.png "
                alt=""
              />
            </a>
          </li>
          <li className="test-icon">
            <a href="/test">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2170/2170042.png "
                alt=""
              />
            </a>
          </li>
          <li className="room-icon">
            <a href="/room">
              <img
                src="https://cdn-icons-png.flaticon.com/512/12379/12379622.png "
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    );
}
export default SideNav