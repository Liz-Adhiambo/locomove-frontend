"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './login.module.css'


interface FormData {
  username: string;
  password: string;
  email: string;
  dob: string;
  gender: string;

  // ... add other fields as required
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    dob: '',
    gender: '',
    // ... add other fields as required
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('YOUR_DJANGO_BACKEND_URL/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      // Handle successful signup, like redirecting to login page
    } else {
      // Handle errors, maybe display them to the user
    }
  };

  return (
    <div className={styles.login}>
        <div className={styles.card}>
            
            <form onSubmit={handleSubmit}>
                <div>
            {/* <label className={styles.label}>Email</label> */}
                <input
                type="text"
                name="email"
                className={styles.inputbox}
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                />
                </div>
                <div>
            {/* <label className={styles.label}>Password</label> */}
                <input
                type="password"
                name="password"
                className={styles.inputbox}
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                />
                </div>
            {/* <p>forgot password? </p> */}
            <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}
