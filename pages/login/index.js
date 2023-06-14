"use client"
import Head from 'next/head';
import styles from '@styles/loginpages.module.css'
import { useState } from "react"
import Cookies from "js-cookie";
import Layout from '@layout/layout';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       const statuss =  await signIn('credentials', {
            redirect: false,
            userName: e.userName,
            password: e.password,
            callbackUrl: "/"
        })

        if(statuss.ok) router.push(statuss.url)
        console.log('statuss', statuss)
    }

    //google handler function
    async function handleGoogleSignin(){
        signIn('google', {callbackUrl: "http://localhost:3000"})
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
                    <p className={styles.textsummary}>
                    We are thrilled to have you join our vibrant community of like-minded individuals. At Tribals, we foster an environment where collaboration, growth, and innovation thrive.
                    </p>
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

                    <div className={styles.separateline}><span className={styles.lineseparate}></span><span>Or</span><span className={styles.lineseparate}></span></div>

                    <div className={styles.optionsignin}>
                        <div className={styles.optionControls}>
                            <button type="submit" onClick={handleGoogleSignin}>Sign in with Google <Image src={'/images/google.svg'} width={20} height={20}></Image></button>
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
