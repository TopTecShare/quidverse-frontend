import React from "react"
import { Col, Container, Row } from "reactstrap"
import styles from "./Footer.module.css"
const logo = "/assets/images/logo.png"

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <div className={styles.title}>
            <h2>JOIN OUR SOCIAL MEDIA</h2>
          </div>
          <div className={styles.iconGroup}>
            <img src="assets/images/facebook.png" className={styles.iconSize} />
            <img src="assets/images/twitter.png" className={styles.iconSize} />
            <img
              src="assets/images/instagram.png"
              className={styles.iconSize}
            />
            <img src="assets/images/discord.png" className={styles.iconSize} />
          </div>
          <div className={styles.iconGroup}>
            <p style={{ marginTop: "30px" }}>
              All trademarks referenced herein are the properties of their
              respective owners. ©2022 Aetherverse™ Studios. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
      <div className="footer2 center"></div>
    </>
  )
}
