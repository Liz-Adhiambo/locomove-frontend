"use client";
import { validateSignUp } from "@/features/validate";
import styles from "./signup.module.css";
import { fetchApiPost } from "@/features/api";


export default function SignUp() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        if (!validateSignUp(data)) {
            return;
        }

        const signUpObj = {
            email: data.email,
            username: data.username,
            phone: data.phone,
            password: data.password,
            role: window.localStorage.getItem("user"),
        }

        console.log(signUpObj);

        const result = await fetchApiPost("/users/", signUpObj, {});

        if (result.error) {
            console.log(result.error);
            return;
        }

        window.localStorage.setItem("token", result.access_token);
        window.localStorage.setItem("refresh", result.refresh_token);

        console.log(window.localStorage.getItem("token"));
        console.log(window.localStorage.getItem("refresh"));

        window.location.href = '/land';
    };

    return (
        <div className={styles.container}>
            <h1>Sign Up</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" />
                </div>
                <div className={styles.btncont}><button type="submit" className={styles.submit}>Sign Up</button></div>
                </form>
            </div>
        </div>

    );
}
