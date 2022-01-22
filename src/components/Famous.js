import styles from "../styles/style.module.css"
import { Row, Col } from "reactstrap"

const Famous = () => {
  return (
    <div className={styles.famous}>
      <Row>
        <Col xs lg="7" className={styles.border}>
          <p
            style={{
              fontFamily: "Rammetto",
              fontSize: "32px",
              color: "#3bb9ff",
            }}
          >
            WELCOME TO THE QUIDVERSE: MINT TO UNLOCK
          </p>
          <p>
            The Quidverse is the first and only underwater metaverse populated
            by the fastest growing creature in the ocean-- the squid. In the
            Squid Metaverse (Quidverse) you can make real money in a virtual
            world, socially connect, find real world jobs (by connecting), play
            P2E arcade games, and more. The TKO NFT collection is your key to
            the metaverse.
          </p>
        </Col>
        <Col xs lg="5" className={styles.border}>
          <div className={styles.penguinImgTag}>
            <div className={styles.penguinImg}>
              <img src="/assets/images/1.gif" className={styles.imgWidth} />
            </div>
          </div>
          {/* <Col>
            <img
              src="/assets/images/ape1.png"
              className={styles.monkey_width}
            />
            <img
              src="/assets/images/ape2.png"
              className={styles.monkey_width}
            />
          </Col>
          <Col>
            <img
              src="/assets/images/ape3.png"
              className={styles.monkey_width}
            />
            <img
              src="/assets/images/ape4.png"
              className={styles.monkey_width}
            />
          </Col> */}
        </Col>
      </Row>
      {/* <div>
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
        <Row>
          <Col xs lg="7" className={styles.border}>
            <p>
              Three prizes will depend on what you mint. The more you mint the
              higher your chance will be to get those prestige prizes. Those are
              ultra rare because they only appear once in the entire collection
              (i.e. the Rolex attribute). Five cash prizes for a random NFT--
              you can win more than one cash prize. The more you mint the more
              you can win.
            </p>
          </Col>
          <Col xs lg="5" className={styles.border}>
            <p style={{ fontSize: "16px" }}>
              Note: Thirty apes are being withheld from the sale. These will be
              used for giveaways, puzzle rewards-and for the creators' BAYC
              memberships.
            </p>
          </Col>
        </Row>
      </div> */}
      {/* <div className={styles.buy}>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col sm={12} lg={3}>
            <p
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              BUY AN APE
            </p>
          </Col>
          <Col sm={12} lg={3}>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              The initial sale has sold out. To get your Bored Ape, check out
              the collection on OpenSea.
            </p>
          </Col>
          <Col sm={12} lg={3} style={{ textAlign: "center" }}>
            <button
              style={{
                borderRadius: "5px",
                border: "none",
                backgroundColor: "black",
                color: "yellow",
                padding: "10px",
              }}
            >
              BUY AN APE ON
              <br />
              OPENSEA
            </button>
          </Col>
        </Row>
      </div> */}
    </div>
  )
}

export default Famous
