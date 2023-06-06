"use client"
import styles from '../styles/loginpages.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"
import Cookies from "js-cookie";

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

                // Store the access token in a cookie
                 Cookies.set("accessToken", data.accessToken, {
                     expires: 7, 
                     secure: true, 
                     sameSite: "strict", 
                     httpOnly: true 
                    });

                console.log(data);
                console.log(Cookies);
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
    <div className={styles.loginContainer}>
        
            <div className={styles.imageContainer}>
                <img
                src='images/tribes.jpg'
                alt='tribals'
                width={1100} 
                />
            </div>
            <div className={styles.signInContainer}>
                <h3 className={styles.signInWelcomeHead}>
                    Welcome to Tribals
                </h3>
                <div className={styles.textContainer1}>
                    <p>Sign in to continue</p>
                    <p>Not a member yet? <span className={styles.register}><a href='#'>Register Now</a></span></p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formControls}>
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    placeholder='Enter Username'
                    autocomplete="off"
                    value={userName}
                    onChange={handleUserNameChange}
                    />
                </div>
                <div className={styles.formControls}>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    placeholder='Enter Password'
                    autocomplete="off"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.formControls}>
                    <span>
                        <input type='checkbox' />
                        <label>Keep me logged in</label>
                    </span>
                    
                </div>
                <div className={styles.formControls}>
                    <button type="submit" className={styles.loginbtn}>Login Now</button>
                </div>
                </form>
                <p className={styles.textCenter}><a href='#'>Forgot password?</a></p>
                <div className={styles.signinoptions}>
                    <h5>Or sign in with</h5>
                    <div className={styles.accountSocials}>
                        <p className={styles.google}>Google</p>
                        <p className={styles.twitter}>Twitter</p>
                        <p className={styles.facebook}>Facebook</p>
                    </div>
                </div>
            </div>
            
        
    </div>
  )
}

export default LoginPage
