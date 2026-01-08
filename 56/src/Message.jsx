import React from "react";  
function Message({amount}){
    return(
        <div className="text-xl bg-green-400">
           You are donating ${amount}
        </div>
    );
}
export default Message;