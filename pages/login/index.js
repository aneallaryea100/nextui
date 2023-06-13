"use client"
import Head from 'next/head';
import styles from '@styles/loginpages.module.css'
import { useState } from "react"
import Cookies from "js-cookie";
import Layout from '@layout/layout';
import Link from 'next/link';
import Image from 'next/image';

function Login() {
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
                console.log(Cookies.set("accessToken", data.accessToken, {
                    expires: 7, 
                    secure: true, 
                    sameSite: "strict", 
                    httpOnly: true 
                   }));
                console.log('token',data.data.token.accessToken);
                console.log(Cookies.get("accessToken"));
                // Redirect to the partner page
                router.push("/");
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
    <Layout>
        <Head>
            <title>Login</title>
        </Head>
        <div className={styles.loginContainer}>
                <div className={styles.signInContainer}>
                    <h3 className={styles.signInWelcomeHead}>
                        Welcome to Tribals
                    </h3>
                    <div className={styles.textContainer1}>
                        <p>Sign in to continue</p>
                        <p>Not a member yet? <Link href={'/register'} className={styles.register}>Register Now</Link></p>
                        
                    </div>
                    <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.formControls}>
                        <input
                        type="text"
                        id="username"
                        placeholder='Enter Username'
                        autoComplete="off"
                        value={userName}
                        onChange={handleUserNameChange}
                        />
                    </div>
                    <div className={styles.formControls}>
                        <input
                        type="password"
                        id="password"
                        placeholder='Enter Password'
                        autoComplete="off"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={styles.formControls}>
                        <button type="submit" className={styles.loginbtn}>Login</button>
                    </div>

                    <p className={styles.paragraphreset}><Link href={'/resetpassword'} className={styles.forgotpassword}>Forgot password?</Link></p>
                    </form>
                    <div className={styles.optionsignin}>
                        <div className={styles.optionControls}>
                            <button type="submit">Sign in with Google <Image src={'/images/google.svg'} width={20} height={20}></Image></button>
                        </div>
                        <div className={styles.optionControls}>
                            <button type="submit">Sign in with Github <Image src={'/images/github.svg'} width={20} height={20}></Image></button>
                        </div>
                        <div className={styles.optionControls}>
                            <button type="submit">Sign in with Twitter<Image src={'/images/twitter.svg'} width={20} height={20}></Image></button>
                        </div>
                    </div>
                    
                </div>
        </div>
    </Layout>
  )
}

export default Login
