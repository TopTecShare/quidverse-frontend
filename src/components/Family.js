import styles from "../styles/style.module.css"
import { Row, Col } from "reactstrap"

function Family() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* <div>
          <p className={styles.subtitle1}>PUDGY</p>
          <p className={styles.subtitle2}>FAMILY</p>
        </div> */}
      </div>

      <div style={{ color: "white" }}>
        <p
          className={styles.fair}
          style={{
            color: "yellow",
            fontFamily: "Rammetto",
            fontSize: "28px",
            marginBottom: "0",
          }}
        >
          RANDOM PRIZES FOR TKO MINTERS
        </p>
        <p
          className={styles.fair}
          style={{ fontSize: "24px", fontStyle: "italic" }}
        >
          (Get rewarded for being a pioneer)
        </p>

        <div className={styles.border}>
          <p>
            Three prizes will depend on what you mint. The more you mint the
            higher your chance will be to get those prestige prizes. Those are
            ultra rare because they only appear once in the entire collection
            (i.e. the Rolex attribute). Five cash prizes for a random NFT-- you
            can win more than one cash prize. The more you mint the more you can
            win.
          </p>
        </div>
      </div>
      <div className={styles.family}>
        <Row className={styles.team_members}>
          <Col>
            <img
              src="assets/images/ape1.png"
              className={styles.team_member_pic}
            />
          </Col>
          <Col>
            <p style={{ color: "white", fontSize: "24px" }}>
              Rolex Tentacle Prop: get a $40,000 customized Rolex
            </p>
          </Col>
        </Row>
        <Row className={styles.team_members}>
          <Col>
            <img
              src="assets/images/ape2.png"
              className={styles.team_member_pic}
            />
          </Col>
          <Col>
            <p style={{ color: "white", fontSize: "24px" }}>
              Ali vs Liston OG Scene: get signed Muhammad Ali gloves
            </p>
          </Col>
        </Row>
        <Row className={styles.team_members}>
          <Col>
            <img
              src="assets/images/ape3.png"
              className={styles.team_member_pic}
            />
          </Col>
          <Col>
            <p style={{ color: "white", fontSize: "24px" }}>
              Beach Background: get a family vacation worth $10,500
            </p>
          </Col>
        </Row>
        <Row className={styles.team_members}>
          <Col>
            <img
              src="assets/images/ape4.png"
              className={styles.team_member_pic}
            />
          </Col>
          <Col>
            <p style={{ color: "white", fontSize: "24px" }}>
              5 random NFTs: get $1,000 each straight to your wallet
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Family
