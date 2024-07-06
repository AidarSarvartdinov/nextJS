import Image from "next/image"
import styles from "./AboutImgPart.module.css"

export default function AboutImgPart() {
    return (
        <div className="image-part">
            <Image id={styles.aboutImg} src="/img/aboutMePhoto.jpg" alt="AboutMeImage"
            height={500} width={375}/>
        </div>
    )
}
