"use client"
import Head from 'next/head';
import styles from '@styles/loginpages.module.css'
import { useState } from "react"
import Cookies from "js-cookie";
import SignPageLayout from '@layout/signpage/layout';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { login_validate } from '../../lib/validate'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
    const [show, setShow] = useState(false)
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            userName:'',
            password:''
        },
        validate: login_validate,
        onSubmit
    })

    console.log(formik.errors);

    async function onSubmit (values) {
       const status =  await signIn('credentials', {
            redirect: false,
            userName: values.userName,
            password: values.password,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)
        console.log('status', status)
    console.log(values);
    }

    //google handler function
    async function handleGoogleSignin(){
        signIn('google', {callbackUrl: "http://localhost:3000"})
    }

    //github handler function
    async function handleGithubSignin(){
        signIn('github', {callbackUrl: "http://localhost:3000"})
    }


  return (
    <SignPageLayout>
        <Head>
            <title>Login</title>
        </Head>
        <div className={styles.loginContainer}>
                <div className={styles.signInContainer}>
                    <h3 className={styles.signInWelcomeHead}>
                        Tribals
                    </h3>
                    
                    <div className={styles.textContainer1}>
                        <p>Sign in to continue</p>
                        <p>Not a member yet? <Link href={'/register'} className={styles.register}>Register Now</Link></p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                    <div className=''>
                        <input
                        className="p-2 border-none rounded-lg outline-none w-full bg-transparent"
                        type='text'
                        name='userName'
                        placeholder='Enter Username'
                        {...formik.getFieldProps('userName')}
                        />
                    </div>
                    {formik.errors.userName && formik.touched.userName?<span>{formik.errors.userName}</span>: <></>}
                    <div className='flex'>
                        <input
                        className="p-2 border-none rounded-lg outline-none w-full bg-transparent"
                        type={`${show ? "text" : "password"}`}
                        name='password'
                        placeholder='Enter Password'
                        {...formik.getFieldProps('password')}
                        />
                        <span className='-ml-6 flex items-center justify-center w-6 text-gray-600 text-2xl' onClick={()=> setShow(!show)}>{show ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                    </div>
                    {formik.errors.password && formik.touched.password?<span>{formik.errors.password}</span>: <></>}
                    <span className='bg-dark rounded-lg outline-none w-full text-white font-meduim'>
                        <button type="submit" className='p-2 border-none rounded-lg outline-none w-full bg-blue-900'>Login</button>
                    </span>
                        
                

                    <p className={styles.paragraphreset}><Link href={'#'} className={styles.forgotpassword}>Forgot password?</Link></p>
                    </form>

                    <div className={styles.separateline}><span className={styles.lineseparate}></span><span>Or</span><span className={styles.lineseparate}></span></div>

                    <div className={styles.optionsignin}>
                        <div className='bg-dark text-white rounded-lg'>
                            <button type="submit" onClick={handleGoogleSignin} className='bg-blue-800 w-full border-none outline-none p-2 rounded-lg cursor-pointer flex items-center justify-evenly text-white text-base'>Sign in with Google <Image src={'/images/google.svg'} width={20} height={20} alt='googlesvg'></Image></button>
                        </div>
                        <div className='bg-dark text-white rounded-lg my-2'>
                            <button type="submit" onClick={handleGithubSignin} className='bg-blue-800 w-full border-none outline-none p-2 rounded-lg cursor-pointer flex items-center justify-evenly text-white text-base'>Sign in with Github <Image src={'/images/github_white.svg'} width={25} height={25} alt='githubsvg'></Image></button>
                        </div>
                    </div>

                    <div className=''>
                        <p className='font-medium text-gray-900'>All rights reserved. Tribals &copy; 2023</p>
                    </div>
                    
                </div>
        </div>
    </SignPageLayout>
  )
}

export default Login
