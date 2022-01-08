import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import StairCase from "../public/images/Stairs.jpeg"
import GithubIcon from "../public/images/github-fill.svg"
import LinkedInIcon from "../public/images/linkedin-fill.svg"

export default function Home() {
  return (
    <>
      <main className={styles.container}>

        <header className={styles.header}> 
          <h1 className={styles.greeting}>Dev.</h1>
          <p>A statically generated blog example using Next.js.</p>
        </header>
        
          <Image src={StairCase} alt="An Image of a Stair Case"/>

          <section className={styles.section}>
              
              <p className={styles.name}>Giancarlo Garcia Deleon</p>
              
              <div className={styles.smContainer}>
                <p>Full Stack Developer</p>
                <div className={styles.imgContainer}>
                  <Link href="https://linkedin.com/in/giancarlo-garcia/"  alt="LinkedIn link to Giancarlo&apos;s Page" passHref>
                    <Image className={styles.smImage} src={LinkedInIcon} alt="LinkedIn Icon" width={50} height={50} />
                  </Link>
                  
                  <Link href="https://github.com/ggiande" alt="Github link to Giancarlo&apos;s Page" passHref>
                    <Image className={styles.smImage} src={GithubIcon} alt="Github Icon" width={50} height={50}/>
                  </Link>
                </div>
              </div>
          </section>

          <div className={styles.hr} />
          <p>
            <ul className={styles.list}>
              <li>Hello there, 👋 I am currently pursuing a Bachelor&apos;s degree in Computer Science</li>
              <li>💻 I&apos;m a Computer Science major at California State University Stanislaus.</li>
              <li>💼 In the past I have worked as a Software Engineering Academic Intern at JPMorgan Chase&amp;Co.</li>
              <li>💬 Feel free to talk to me about paving the way for students to achieve success through new opportunities and being as inclusive as possible.</li>
              <li>🔨 I&apos;m currently working on a handful of side projects and partaking in new initiatives.</li>
            </ul>
          </p>
      </main>
    </>
  )
}