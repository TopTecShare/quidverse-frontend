import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"

// Components
import Header from "../components/Header/Header"
// import Carrousel from "../components/Carrousel"
import Footer from "../components/Footer/Footer"
import { Container, Row, Col } from "reactstrap"
// import Modal from "../components/Modal"
// import swal from "sweetalert"
// import api from "../util/api"
import Head from "next/head"
import styles from "../styles/style.module.css"

function Home() {
  return (
    <>
      <Head>
        <title>Shibamask</title>
      </Head>
      <Header />
      {/* <Carrousel /> */}
      <div className={styles.section2}>
        <div className={styles.panel}>
          <div className={styles.tabPanel}></div>
          <div className={styles.tabmenu}>
            <div className={styles.tabBtn}>SUMMARY</div>
            <div className={styles.tabBtn}>DETAIL</div>
            <div className={styles.tabBtn}>TRANSFER</div>
            <div className={styles.tabBtn}>SWAP</div>
            <div className={styles.tabBtn}>STATS</div>
            <div className={styles.tabBtn}>SETTINGS</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
