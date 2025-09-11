import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import ChatBox from "./ChatBox";


function HomePage(){
    return (
        <div className="home-container">
            <Header/>
            <SideNav/>
            <ChatBox/>
        </div>
    )
}
export default HomePage