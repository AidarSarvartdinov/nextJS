
import React, { FormEvent } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import styles from "./Comic.module.css"

interface ResponseData {
    "safe_title": string,
    "img": string,
    "alt": string,
    "year": number,
    "month": number,
    "day": number
}

async function getComic(email: string): Promise<ResponseData> {
    let param = new URLSearchParams();
    param.append("email", email);
    const response = await fetch("https://fwd.innopolis.university/api/hw2?" + param.toString())
    const data = await response.json() 
    return data;
    
}

async function Comic() {
  const obj = await getComic("a.sarvartdinov@innopolis.university");
  let imgSrc = ''
  let alt = ''
  let title = ''
  let date = ''
  
  imgSrc = obj["img"]
  alt = obj["alt"]
  title = obj["safe_title"]
  date = new Date(Date.UTC(obj["year"], obj["month"] - 1, obj["day"])).toLocaleDateString()


  return (
    <Layout title="Comic">
        <div>
        <div className="heading" id={styles.comicHeading}>
            Comic
        </div> 
        <div id={styles.comicTitle}>{title}</div>
        <div id={styles.comicImgPart}>
            <img src={imgSrc} alt={alt} />
        </div>
        <div id={styles.comicDatePart}>
            <div id="comicDate">{date}</div>
        </div>
        </div>
    </Layout>
  )
}

export default Comic