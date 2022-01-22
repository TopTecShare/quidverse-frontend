import styles from "../styles/style.module.css"
import { StylesContext } from "@material-ui/styles"
import { Row, Col } from "reactstrap"
import FirstItem from "./FirstItem"

function Project() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src="assets/images/sublogo.png" />
        <div>
          <p className={styles.subtitle1}>WHAT ABOUT</p>
          <p className={styles.subtitle2}>THE PROJECT</p>
        </div>
      </div>
      <div>
        <Row className={styles.projectDetail}>
          <Col className={styles.carousel}>
            <FirstItem />
            {/* <SecondItem /> */}
          </Col>
          <Col>
            <p style={{ color: "white", fontSize: "20px" }}>
              Pudgy Penguins launched on July 22, 2021. Each penguin is unique
              and no two are exactly alike.
              <br />
              The combination of a Pudgy Penguins aesthetics was randomly
              generated from over 150 hand drawn traits.
              <br />
              <br />
              There arer 5 Pudgy Penguins that were created by the artist and do
              not have randomly generated traits. These 5 Pudgy Penguins are
              known as the most rare and include a Pudgy Penguin in a banana
              suit, a shark costume, a pineapple suit, a ghost costume, and one
              of them is eve facing the opposite direction of all other
              Penguins.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Project
