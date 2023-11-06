"use client";

import Link from "next/link";
import styles from "./movers.module.css";
import { Button, User } from "@nextui-org/react";
import { CameraIcon } from "@/components/CameraIcon";
import { useState} from "react";


type NavProps = {
    setNav: (arg0: string)=>void
}
function NavBar({setNav} :NavProps) {
    return (
    <>
        <div className={styles.avi}>
            <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
        </div>

        <div className={styles.options}>
            <div className={styles.option} onClick={()=> setNav("completed")}>
                Your completed moves
            </div>
            <div className={styles.option} onClick={() => setNav("pending")}>
                Pending moves
            </div>
            <div className={styles.option} onClick={() => setNav("manage")}>
                Manage drivers
            </div>
            <div className={styles.option} onClick={() => setNav("reviews")}>
                See your reviews
            </div>
            <div className={styles.button}>
                <Button color="success" endContent={<CameraIcon />} onClick={() => setNav("bids")}>
                    View current bids
                </Button>
            </div>

        </div>

        </>

    );
}

function Driver ({src, name, rating, completed, plate, active}) {
    return (
            <div className={styles.driver}>
                    <div className={styles.header}>
                        <User
                            name={name}
                            description="Driver"
                            avatarProps={{
                                src: src
                            }}
                        />
                        <div>
                            {rating} {" "}stars
                        </div>
                    </div>
                    <p className={styles.done}>Completed {" "} {completed} {" "} orders</p>
                    <div className={styles.footer}>
                        <span className={styles.plate}>{plate}</span>
                        <div className={styles.active}>
                            { active && <><span></span><span>Active</span></>}
                        </div>
                    </div>
                </div>

    )
}

//Manage drivers
function Manage(){
    const drivers = [
        {
            name: "John Doe",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            rating: 4,
            completed: 21,
            plate: "KCJ 195Q",
            active: true
        },
        {
            name: "John Doe",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            rating: 4,
            completed: 21,
            plate: "KCJ 195Q",
            active: true
        },
        {
            name: "John Doe",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            rating: 4,
            completed: 21,
            plate: "KCJ 195Q",
            active: true
        },
        {
            name: "John Doe",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            rating: 4,
            completed: 21,
            plate: "KCJ 195Q",
            active: true
        },


    ]


    return(
        <>
            <h1>Manage your drivers</h1>
            <h2>Your drivers</h2>
            <div className={styles.drivers}>
                { drivers.map((d, i) => (
                    <Driver key={i} name={d.name} src={d.src} completed={d.completed} plate={d.plate} active={d.active} rating={d.rating}/>
                ))}
                <button className={styles.adddriver}>
                    +
                    <p> Add a driver </p>
                </button>

            </div>
        </>
    )
}

function Main() {
    return (
            <h1>My Moves</h1>
    );
}

export default function Page() {
    const [nav, setNav] = useState("complete")
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <NavBar setNav={setNav}/>
            </div>
            <div className={styles.main}>

            { nav == "manage" && <Manage />}
            { nav == "completed" && <Main />}
            </div>
        </div>
    )
}
