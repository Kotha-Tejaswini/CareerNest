import React, { useState } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const HandleLogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({username,password}),
        })
        .then(async (res) => {
            const data = await res.json();
            if (!res.ok) {
              throw new Error(data.message || "Login failed");
            }
            alert(data.message);
            if (data.message === "Login successful") {
              navigate("/home");
            }
          })
          .catch((err) => {
            console.error(err);
            alert(err.message || "Error logging in. Maybe wrong username or password?");
        });
          
    }
    const Signuppage=()=>{
        navigate('/signup');
    }
    return(
        <div>
            <h1>Welcome to CareerNest!!😄</h1>
            <p class="mainheading" style={{color: "white"}}>Explore Careers Based on Your Skills & Interests!!✌️</p>
            <form onSubmit={HandleLogin}>
                <fieldset style={{width:"280px", backgroundColor:"cadetblue",marginLeft:"550px"}}>
                    <legend>Login form</legend>
                <label for="username">Username: </label>
                {/* <br/> */}
                <input type="text" required placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label for="password">Password:  </label>
                {/* <br/> */}
                <input type="password" required maxLength={16} placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button>Login</button>
                <p>Doesn't have an account? <br/> <button onClick={Signuppage}>Signup</button></p>
                </fieldset>
            </form>
        </div>
    );
}
export default Login;