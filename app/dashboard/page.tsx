"use client";

import { CameraIcon } from "@/components/CameraIcon";
import styles from "./dash.module.css";
import {User, Button, Chip} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {Input} from "@nextui-org/react";
import RequestCard from "@/components/RequestCard";
import Link from "next/link";
import { Comme } from "next/font/google";

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
            <div className={styles.option} onClick={()=> setNav("pending")}>
                Pending
            </div>
            <div className={styles.option} onClick={() => setNav("completed")}>
                Completed
            </div>
            <Link href={"/users/profile"}>
            <div className={styles.option}>
                Profile
            </div>
            </Link>
        </div>


        <div className={styles.button}>
        <Button color="success" endContent={<CameraIcon />} onClick={() => setNav("request")}>
            Make A Request
        </Button>
        </div>
    </>

    );
}

type Item = any
function Main() {
    const [items, setItems] = useState<Item>([]);

    //form methods
    const addItem = (e: any) => {
        e.preventDefault();
        const item = e.target[0].value;
        e.target.reset();
        setItems([...items, item]);
    }

    const removeItem = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            items: JSON.stringify(items),
            from: e.target[0].value,
            destination: e.target[1].value,
            time: e.target[2].value
        }

        console.log(data)
        window.localStorage.setItem('data', JSON.stringify(data))
    }

    return (
        <>
            <h1>Request to Move</h1>

            <div className={styles.form}>
                <div className={styles.items}>
                    {items.map((item: any, idx: number) =>
                        <Chip onClose={()=>{removeItem(idx)}} key={idx}>
                            {item}
                        </Chip>
                    )}
                </div>
                <form onSubmit={addItem}>
                    <Input name="item" label="Enter items you want to move" labelPlacement="outside" description="Press enter after entering an item" isRequired/>
                </form>
                <form onSubmit={handleSubmit}>
                    <Input name="from" label="Where are the items being picked" labelPlacement="outside" description="Choose location" isRequired/>
                    <Input name="destination" label="Where are the items headed" labelPlacement="outside" description="Choose location" isRequired/>
                    <Input type="date" label="" labelPlacement="outside" description="Enter date" isRequired/>
                    <Input type="submit" color="success" value="submit" />
                </form>
            </div>
        </>
    );
}

type Request = any
function Pending () {
    const [requests, setRequests] = useState<Request>([]);

    useEffect(() => {
        const request = JSON.parse((window.localStorage.getItem('data')) as string);
        if (request == "" || request == null){
            return
        }
        setRequests([...requests, request]);
    }, []);
    console.log(requests);

    if (requests.length == 0) {
        return (<h1> You have no pending orders</h1>);
    }

    return(
    <>
        <h1>Here are your pending orders</h1>
        <div className={styles.requests}>
            {requests.map( (r: any, i: number) =>
                <RequestCard key={i} item={r} type={"pending"}/>
            )}
        </div>
    </>
    );
}

function Completed () {
    const completed = [
        {
            from: "Ongata Rongai",
            destination: "Nairobi CBD",
            items: "[\"Hello\"]",
            time: "12th Nov 10:55am",
            type: "completed"
        }
    ]

    return (
        <>
            <h1> Your completed orders </h1>
            <div className={styles.requests}>
                {completed.map( (r: any, i: number) =>
                    <RequestCard key={i} item={r} type={r.type}/>
                )}
            </div>
        </>
    )
}

export default function Land() {
    const [nav, setNav] = useState("request");
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <NavBar setNav={setNav}/>
            </div>
            <div className={styles.main}>
            { nav == "request" &&
                <Main />
            }
            {nav == "pending" &&
                <Pending />
            }
            {nav == "completed" && <Completed /> }
            </div>
        </div>
    );
}
