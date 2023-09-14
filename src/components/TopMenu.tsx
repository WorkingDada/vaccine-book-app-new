import styles from "./topmenu.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"

export default function TopMenu() {
    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} alt='logo' width={50} height={100} sizes='100vh'/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
        </div>
    )
}