"use client";
import { validateLogin } from "@/features/validate";
import styles from "./signup/signup.module.css";
import { fetchApiPost } from "@/features/api";

export default function Login() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        if (!validateLogin(data)) {
            return;
        }

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        }

        const loginData = `username=${data.username}&password=${data.password}&grant_type=password`;


        const result = await fetchApiPost("/users/login", loginData, headers);

        if (result.error) {
            console.log(result.error);
            return;
        }

        window.localStorage.setItem("token", result.access_token);
        window.localStorage.setItem("refresh", result.refresh_token);

        console.log(window.localStorage.getItem("token"));
        console.log(window.localStorage.getItem("refresh"));

        window.location.href = '/land';
    }


    return (
        <div className={styles.container}>
            <h1>Sign Up</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                <div className={styles.btncont}><button type="submit" className={styles.submit}>Sign Up</button></div>
                </form>
            </div>
        </div>

    );
}
