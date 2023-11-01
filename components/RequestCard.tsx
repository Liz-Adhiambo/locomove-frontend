import styles from "./requestCard.module.css";
import {User, Button, Badge, Chip, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";


export default function RequestCard({item, type}){

    const cleanItems = (items) => {
        items = items.replace("[", "")
        items = items.replace("]", "")
        items = items.replaceAll("\"", "")
        return items.split(",")
    }

    console.log(type)


    return (
        <Card className={styles.card}>
                        <CardHeader className={styles.cardheader}>
                            <div>{item.from} -> {item.destination}</div>
                            <div>{item.time}</div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>List of items to be moved</p>
                            <div className={styles.items}>
                            {cleanItems(item.items).map( (it, i) =>
                                <Chip>{it}</Chip>
                            )}
                            </div>
                        </CardBody>
                        <Divider/>
                        <CardFooter className={styles.cardfooter}>
                            { type == "pending" &&
                            <>
                                <Button color="warning" size="sm" radius="full">Cancel request</Button>
                                <Button size="sm" color="primary" radius="full">View bids</Button>
                            </>

                            }
                            { type == "completed" &&
                            <>
                                <Button color="success" size="sm" radius="full">View request details</Button>
                                <Button size="sm" color="danger" radius="full">Delete</Button>
                            </>
                            }
                            { type == "progress" &&
                            <>
                                <Button color="primary" size="sm" radius="full">View request detailes</Button>
                                <Button color="success" size="sm" radius="full">Track your request</Button>
                            </>
                            }

                        </CardFooter>

            </Card>
        );
}

