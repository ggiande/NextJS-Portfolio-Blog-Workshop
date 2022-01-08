import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StairCase from "../public/images/Stairs.jpeg"

export default function Home() {
  return (
    <>
      <main className={styles.container}>

        <header className={styles.header}> 
          <h1 className={styles.greeting}>Blog.</h1>
          <p>A statically generated blog example using Next.js and Markdown.</p>
        </header>
        
          <Image src={StairCase} alt="An Image of a Stair Case"/>
      </main>
    </>
  )
}
