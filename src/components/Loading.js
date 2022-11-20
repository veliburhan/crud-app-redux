import React from "react";

import "../assets/css/Navbar-style.css"
import loading from "../assets/image/loading.gif"

const Loading=()=>{
    return(
        <div className="Loading">
          <img src={loading} alt="loading..." />
                     
        </div>
    )
}

export default Loading;