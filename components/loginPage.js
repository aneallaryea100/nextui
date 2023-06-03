"use client"

import { useState } from "react"

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            userName: userName,
            password: password
        };

        try {
            const response = await fetch("https://spes.pscgh.com:442/pp_test/api/Authentication/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            if(response.ok) {
                //login successful, handle the response
                const data = await response.json();
                console.log(data);
            } else {
                //login failed
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            // handle network or other errors
            setError("An Error occured. Please try again later.");
        }
    }


  return (
    <div className='loginContainer'>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                value={userName}
                onChange={handleUserNameChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
      
    </div>
  )
}

export default LoginPage
