"use client";
import { validateSignUp } from "@/features/validate";
import styles from "./signup.module.css";
import { fetchApiPost } from "@/features/api";
import { Input } from "@nextui-org/react";
import {Button} from "@nextui-org/react";



export default function SignUp() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        if (!validateSignUp(data)) {
            throw "invalid data";
        }

        const signUpObj = {
            email: data.email,
            username: data.username,
            phone: data.phone,
            password: data.password,
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
    /*
        {
            "email":"mover2@gmail.com",
            "password":"testing1234",
            "first_name":"testdriver",
            "last_name":"testing",
            "username":"mover2",
            "middle_name":"middle",
            "dob":"2022-09-19",
            "gender":"female"
        }
    */
    return (
        <div className={styles.container}>
            <h1>Sign Up</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={styles.field}>
                        <Input
                            type="email"
                            label="Email"
                            description="Please enter your email address."
                            className="max-w-xs"
                        />
                    </div>
                    <div className={styles.field}>
                        <Input
                            type="text"
                            label="Phone Number"
                            description="Format: 123-456-7890"
                            className="max-w-xs"
                        />
                    </div>
                    <div className={styles.field}>
                        <Input
                            type="text"
                            label="Username"
                            defaultValue=""
                            description="Pick your preferred username."
                            className="max-w-xs"
                        />

                    </div>
                    <div className={styles.field}>
                        <Input
                            type="password"
                            label="Password"
                            defaultValue=""
                            description="Please enter your password."
                            className="max-w-xs"
                        />

                    </div>
                    <div className={styles.field}>
                        <Input
                            type="password"
                            label="Confirm Password"
                            defaultValue=""
                            description="Please confirm your password."
                            className="max-w-xs"
                        />
                    </div>

                    <div className={styles.btncont}>
                        <Button
                            type="submit"
                            auto
                            radius="sm"
                            color="primary"
                            >Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
