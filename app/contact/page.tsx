import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <Layout title="Contact Me">
        <div style={{"textAlign": "center"}}><h1 className="heading">My social links</h1></div>
        <div id={styles.links}>
            <a id="tg-link" href="https://t.me/aidar_sar"><Image src="/img/telegramIcon.png" width={145} height={135} alt="Telegram" /></a>
            <a id="dc-link" href=" https://discord.com/users/Aidar#6319"><Image src="/img/discordIcon.png" width={145} height={135} alt="Discord" /></a>
            <a id="gh-link" href="https://github.com/AidarSarvartdinov"><Image src="/img/githubIcon.png" width={145} height={135} alt="GitHub" /></a>
        </div>
    </Layout>
  )
}

export default Contact