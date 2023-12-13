'use client'
import { useState } from "react";
import itemsInfo from "../../../public/Items.json";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Bootstrap.module.css";
import Image from "next/image";

export default function BootstrapCarousel() {
    const { bootstrap } = itemsInfo.items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <Image src={item.imageUrl} alt="slides" width={400} height={500} />
            {/* <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
            </Carousel.Caption> */}
        </Carousel.Item>
        ))}
    </Carousel>
    );
}

