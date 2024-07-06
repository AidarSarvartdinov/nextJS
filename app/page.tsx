import Image from "next/image";
import Layout from "./components/Layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Layout title="Aidar's website">
      <main id={styles.mainHome}>
        <div className="text-part">
              <div className="main-text">
                  <h1 style={{"fontSize": "50px"}}>HELLO! My name is <span className="red">Aidar Sarvartdinov</span></h1>
                  <p style={{"fontSize": "35px"}}>I am a first year bachelor student at <span className="red">Innopolis University</span></p>
                  <p style={{"fontSize": "30px"}}>This is my homepage</p>
              </div>
          </div>
          <div className="image-part">
              <Image id={styles.mainPhoto} src="/img/mainPhoto.jpg" alt="mainPhoto" width={400} height={400}/>
          </div>
      </main>
    </Layout>
  );
}
