"use client";

import { Button, Input, User } from "@nextui-org/react";
import styles from "./profile.module.css"
import Link from "next/link";

export default function Profile(){
    const updateInfo = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Link href="/dashboard" className={styles.link}>&lt;&lt;Back to Dashboard</Link>
                <div className={styles.avatar}>
                    <form>
                        <label htmlFor="avatar">
                            <User
                                name="Jane Doe"
                                description="Click on the photo to change avatar"
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                    size: "lg"
                                }}
                            />
                        </label>
                        <input type="file" name="avatar" id="avatar" style={{display:"none"}}/>
                    </form>
                </div>
            </div>
            <div className={styles.info}>
                <form onSubmit={updateInfo}>
                    <h2>Personal Information</h2>
                    <div className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="firstname"> First name </label>
                            <Input name="firstname" id="firstname" value="Jane" description="Change first name"/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="lastname"> Last name </label>
                            <Input name="lastname" id="lastname" value="Doe" description="Change last name"/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="phone"> Phone number </label>
                            <Input name="phone" id="phone" value="+254700000000" description="Change and verify phone number"/>
                            <Button color="success" radius="full" size="sm">verify</Button>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email"> email </label>
                            <Input name="email" id="email" value="jane.doe@email.com" description="Change email"/>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="Username"> Username </label>
                            <Input name="username" id="username" value="Doejane" description="Change your "/>
                        </div>

                    </div>
                    <div className={styles.divsubmit}><Input type="submit" color="primary" value="update information" className={styles.submit} /></div>
                </form>
            </div>

        </div>
    );
}
