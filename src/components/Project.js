import { StylesContext } from "@material-ui/styles"
import { Col } from "reactstrap"
import SecondItem from "./SecondItem"

function Project() {
  return (
    <div>
      <div>
        <img src="assets/images/opening.gif" />
        <div>
          <p>WHAT ABOUT</p>
          <p>THE PROJECT</p>
        </div>
        <Row className={styles.projectDetail}>
          <Col className={styles.carousel}>
            {/* <FirstItem />
            <SecondItem /> */}
          </Col>
          <Col>
            <p>
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
