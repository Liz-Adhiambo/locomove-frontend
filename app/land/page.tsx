"use client";

import { CameraIcon } from "@/components/CameraIcon";
import styles from "./land.module.css";
import {User, Button, Badge, Chip, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {Input} from "@nextui-org/react";
import RequestCard from "@/components/RequestCard";

function NavBar({setNav}) {
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
            <div className={styles.option} onClick={() => setNav("profile")}>
                Profile
            </div>
        </div>


        <div className={styles.button}>
        <Button color="success" endContent={<CameraIcon />} onClick={() => setNav("request")}>
            Make A Request
        </Button>
        </div>
    </>

    );
}
function Main() {
    const [items, setItems] = useState([]);

    //form methods
    const addItem = (e) => {
        e.preventDefault();
        const item = e.target[0].value;
        e.target.reset();
        setItems([...items, item]);
    }

    const removeItem = (index) => {
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
            <h1> Make a move request </h1>

            <div className={styles.form}>
                <div className={styles.items}>
                    {items.map((item, idx) =>
                        <Chip onClose={()=>{removeItem(idx)}} key={idx}>
                            {item}
                        </Chip>
                    )}
                </div>
                <form onSubmit={addItem}>
                    <Input name="item" label="Enter items you want to move" labelPlacement="outside" description="Press enter after entering an item"/>
                </form>
                <form onSubmit={handleSubmit}>
                    <Input name="from" label="Where are the items being picked" labelPlacement="outside" description="Choose location" required/>
                    <Input name="destination" label="Where are the items headed" labelPlacement="outside" description="Choose location" required/>
                    <Input type="time" label="When will they be picked" labelPlacement="outside" required/>
                    <Input type="submit" color="success" value="submit" />
                </form>
            </div>
        </>
    );
}

function Pending () {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const request = JSON.parse(window.localStorage.getItem('data'));
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
            {requests.map( (r, i) =>
                <RequestCard key={i} item={r} type={"pending"}/>
            )}
        </div>
    </>
    );
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
            </div>
        </div>
    );
}
