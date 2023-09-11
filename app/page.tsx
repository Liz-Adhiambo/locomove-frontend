"use client";
import { useState } from 'react'

import styles from './app.module.css'
import Navigation from '@/components/Navbar'
import Modal from '@/components/Modal'

export default function Home() {
    const [showModal, setShowModal] = useState(true);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

  return (
    <main className={styles.main}>
       {/* <Modal show={showModal} showHandler={openModal}>
            <h1>Modal</h1>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </Modal>*/}

        <Navigation />
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
