import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import styles from '@styles/signup.module.css'
import Layout from "@layout/layout"
import { useFormik } from 'formik';
import { registerValidate } from '../../lib/validate'

function Register() {
  const formik = useFormik({
    initialValues:{
      userName:'',
      email:'',
      password:'',
      cpassword:''
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values){
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.container}>
      <h1 className={styles.h1text}>Register as a Tribal</h1>
      <p className={styles.ptext}>
         At Tribals, we strive to create an inclusive and empowering community where you can unlock your full potential. Join us today and embark on a transformative journey towards reaching new heights of success.
      </p>
      <form onSubmit={formik.handleSubmit} className={styles.formcontainer}>
        <div className={`${styles.formgroup} ${formik.errors.userName && formik.touched.userName? 'red_border' : ''}`}>
          <input
            type="text"
            name="username"
            placeholder="User name"
            {...formik.getFieldProps('userName')}
          />
        </div>
        {/* {formik.errors.userName && formik.touched.userName?<span>{formik.errors.userName}</span>: <></>} */}
        <div className={`${styles.formgroup} ${formik.errors.email && formik.touched.email? 'red_border' : ''}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
        </div>
        {/* {formik.errors.email && formik.touched.email?<span>{formik.errors.email}</span>: <></>} */}
        <div className={`${styles.formgroup} ${formik.errors.password && formik.touched.password? 'red_border' : ''}`}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
        </div>
        {/* {formik.errors.password && formik.touched.password?<span>{formik.errors.password}</span>: <></>} */}
        <div className={`${styles.formgroup} ${formik.errors.cpassword && formik.touched.cpassword? 'red_border' : ''}`}>
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            {...formik.getFieldProps('cpassword')}
          />
        </div>
        {/* {formik.errors.cpassword && formik.touched.cpassword?<span>{formik.errors.cpassword}</span>: <></>} */}
        <div className={styles.formgroup}>
          <button type="submit" className={styles.registerbtn}>Sign Up</button>
        </div>
      </form>
      <div className={styles.btntextbottom}>
        <p>Have an account? <Link href={'/login'} className={styles.signbtnsq}>Sign In</Link></p>
      </div>
      <div className={styles.registerFooter}>
        <p className={styles.footertext}>All rights reserved. Tribals &copy; 2023</p>
      </div>
      </div>
    </Layout>
  )
}

export default Register
