import styles from "../styles/style.module.css"
import { Row, Col } from "reactstrap"

const Famous = () => {
  return (
    <div className={styles.famous}>
      <Row>
        <Col xs lg="7" className={styles.border}>
          <p style={{ fontFamily: "Rammetto", fontSize: "32px" }}>
            WELCOME TO THE BORED APE YACHT CLUB
          </p>
          <p>
            BAYC is a collection of 10000 Bored Ape NFTs-unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>
        </Col>
        <Col xs lg="5" className={styles.border}>
          <Col>
            <img
              src="/assets/images/mon1.png"
              className={styles.monkey_width}
            />
            <img
              src="/assets/images/mon2.png"
              className={styles.monkey_width}
            />
          </Col>
          <Col>
            <img
              src="/assets/images/mon3.png"
              className={styles.monkey_width}
            />
            <img
              src="/assets/images/mon4.png"
              className={styles.monkey_width}
            />
          </Col>
        </Col>
      </Row>
      <div>
        <p
          className={styles.fair}
          style={{
            color: "yellow",
            fontFamily: "Rammetto",
            fontSize: "28px",
            marginBottom: "0",
          }}
        >
          FAIR DISTRIBUTION
        </p>
        <p
          className={styles.fair}
          style={{ fontSize: "24px", fontStyle: "italic" }}
        >
          (BONDING CURVES ARE A PONZI)
        </p>
        <Row>
          <Col xs lg="7" className={styles.border}>
            <p>
              There are no bonding curves here. Buying a Bored Ape costs
              0.08ETH. There are no price tiers; BAYC membership costs the same
              for everyone.
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
      </div>
      <div className={styles.buy}>
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
      </div>
      <div>
        <p>LIL PUDGYS</p>
        <p>
          What comes after 8888 Pudgy Penguins? 22222 Lil Pudgys.
          <br />
          Each Lil Pudgy is a unique collectible NFT randomly generated from 400
          traits.
          <br />
          Every Pudgy Penguin is eligible to claim a Lil Pudgy on December 19th
          and all of the other Lil Pudgys are waiting to be minted by anybody
          and everybody who wants to join The Huddle!
        </p>
        {/* <img src="assets/images/opening.gif" /> */}
      </div>
    </div>
  )
}

export default Famous
