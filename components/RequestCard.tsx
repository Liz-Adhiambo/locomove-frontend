import styles from "./requestCard.module.css";
import {Button, Chip, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";

type Props = {
    item: any
    type: string
}
export default function RequestCard({item, type} : Props){

    const cleanItems = (items: string) => {
        items = items.replace("[", "").replace("]","").replaceAll("\"","")
        return items.split(",")
    }

    console.log(type)


    return (
        <Card className={styles.card}>
                        <CardHeader className={styles.cardheader}>
                            <div>{item.from} &gt;&gt; {item.destination}</div>
                            <div>{item.time}</div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Items</p>
                            <div className={styles.items}>
                            {cleanItems(item.items).map( (it, i) =>
                                <Chip key={i}>{it}</Chip>
                            )}
                            </div>
                        </CardBody>
                        <Divider/>
                        <CardFooter className={styles.cardfooter}>
                            { type == "pending" &&
                            <>
                                <Button color="warning" size="sm" radius="full">View request details</Button>
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

