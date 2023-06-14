import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import styles from '@styles/signup.module.css'
import Layout from "@layout/layout"

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.container}>
      <h1 className={styles.h1text}>Register as a Tribal</h1>
      <p className={styles.h1text}>
      At Tribals, we strive to create an inclusive and empowering community where you can unlock your full potential. Join us today and embark on a transformative journey towards reaching new heights of success.
      </p>
      <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <div className={styles.formgroup}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <button type="submit" className={styles.registerbtn}>Sign Up</button>
        </div>
      </form>
      <div className={styles.btntextbottom}>
        <p>Have an account? <Link href={'/login'}>Sign In</Link></p>
      </div>
      </div>
    </Layout>
  )
}

export default Register
