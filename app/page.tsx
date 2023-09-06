import Image from 'next/image'
import styles from './app.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textinfo}>
          <h1>Locomove</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, veniam dolor tempore corrupti hic quos esse amet? Perspiciatis magni cumque, voluptatum rerum, reiciendis nobis, provident a quae ipsam rem doloremque?</p>
          <div className={styles.buttoncontainer}>
          <button className={styles.button}>Continue as Client</button>
          <button className={styles.button2}>Continue as Driver</button>
          </div>
          </div>
        <div className={styles.image}>
          <img src="/assets/locomove.gif" />
          </div>

       
      </div>
    </main>
  )
}
