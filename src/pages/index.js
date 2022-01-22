import emailjs from "emailjs-com"

// Components
import Famous from "../components/Famous"
import Family from "../components/Family"
import Project from "../components/Project"
import MintButton from "../components/MintButton"
import { Row, Col, Container } from "reactstrap"

import Head from "next/head"
import styles from "../styles/style.module.css"
import "bootstrap/dist/css/bootstrap.css"
import { DAppProvider } from "@usedapp/core"
import { useEthers } from "@usedapp/core"
import Link from "next/link"

// const mark = "/assets/images/mark.mp4";
// const logo = "/assets/images/logo.png";

function ConnectBtn(props) {
  const { activateBrowserWallet, account } = useEthers()

  const handleWallet = () => {
    activateBrowserWallet()
  }

  return (
    <button className={styles.btnConnect} onClick={handleWallet}>
      {account ? `${account.slice(0, 6)}...${account.slice(-6)}` : "Connect"}
    </button>
  )
}

function Home() {
  return (
    <DAppProvider>
      <Head>
        <title>Pudge Penguins</title>
      </Head>
      <div
        style={{
          backgroundColor: "#07081d",
          fontFamily: "Lorem Ipsum!important",
        }}
      >
        <div className={styles.backDiv}>
          <Container
            style={{
              margin: "0 auto",
              padding: "0 30px",
              marginBottom: "0px",
            }}
          >
            <header className={styles.navbar}>
              <div>
                <p
                  style={{
                    color: "#593f20",
                    fontSize: "20px",
                    marginBottom: "0",
                  }}
                >
                  TENTACLE
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontFamily: "Rammetto",
                    marginBottom: "0",
                    marginTop: "-12px",
                  }}
                >
                  KNOCKOUTS
                </p>
              </div>
              <ul
                className={styles.navUI}
                data-sr-id="3"
                style={{ position: "absolute" }}
              >
                <li style={{ marginRight: "30px" }}>
                  <Link href="/">
                    <label className={styles.navLabel}>Home</label>
                  </Link>
                </li>
                <li style={{ marginRight: "30px" }}>
                  <Link href="/">
                    <label className={styles.navLabel}>About</label>
                  </Link>
                </li>
                <li style={{ marginRight: "30px" }}>
                  <Link href="/">
                    <label className={styles.navLabel}>Best Moments</label>
                  </Link>
                </li>
                <li style={{ marginRight: "30px" }}>
                  <Link href="/">
                    <label className={styles.navLabel}>Family</label>
                  </Link>
                </li>
                <li style={{ marginRight: "30px" }}>
                  <Link href="/">
                    <label className={styles.navLabel}>FAQ</label>
                  </Link>
                </li>
              </ul>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="/assets/images/twitter.png"
                  style={{
                    marginTop: "10px",
                    height: "40px",
                    marginRight: "15px",
                  }}
                ></img>
                <img
                  src="/assets/images/instagram.png"
                  style={{
                    marginTop: "10px",
                    height: "40px",
                    marginRight: "15px",
                  }}
                ></img>
                <img
                  src="/assets/images/facebook.png"
                  style={{
                    marginTop: "10px",
                    height: "40px",
                    marginRight: "15px",
                  }}
                ></img>
                <ConnectBtn />
              </div>
            </header>
            <img
              src="/assets/images/TKO_COVER.jpeg"
              className={styles.backimg}
            />
            <Famous />

            <div>
              <div style={{ marginTop: "50px" }}>
                <Row
                  style={{ paddingTop: 5 }}
                  className={styles.penguinContent}
                >
                  {/* <Col>
                    <div className={styles.penguinImgTag}>
                      <div className={styles.penguinImg}>
                        <img
                          src="/assets/images/1.gif"
                          className={styles.imgWidth}
                        />
                      </div>
                    </div>
                  </Col> */}
                  <Col>
                    <div>
                      <p
                        style={{
                          color: "#79a3b0",
                          fontSize: "36px",
                          marginBottom: "0",
                        }}
                      >
                        TENTACLE
                      </p>
                      <p className={styles.knockouts}>KNOCKOUTS</p>
                    </div>
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "20px",
                      }}
                    >
                      1,000 collectible squid versus dog knockout scenes on the
                      Ethereum blockchain. Inspired by Ali vs Liston -- May 25,
                      1965. TKOs are unique in art quality, utility, and future.
                      Each TKO can be staked and will be a profitable asset in
                      our Quid Ika Metaverse (Quidverse). The Quidverse features
                      P2E arcade, 'buy and stake' virtual land, social
                      connection, and a vast world of underwater riches. As Quid
                      Ika reaches new milestones on roadmap, new benefits and
                      events will get unlocked.
                    </p>
                    {/* <div className={styles.penguinImgTag} data-sr-id="5">
                        <div className={styles.penguinImg}>
                          
                          <img src="/assets/images/frame1.png" style={{ marginTop: '-31px', marginLeft: '-70px', width: '508px' }}></img>
                        </div>
                      </div> */}
                  </Col>
                </Row>
              </div>
              <div>
                <Row style={{ paddingTop: 48, margin: "0 auto" }}>
                  <Col md={4}>
                    <div className={styles.showItemDiv}>
                      <p className={styles.showItemP}>Title</p>
                      {/* <MintBtn txt="MINT 1" amount="1" /> */}
                      <div className={styles.showItemInfo}>TKOs v1</div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={styles.showItemDiv}>
                      <p className={styles.showItemP}>Items</p>
                      {/* <MintBtn txt="MINT 1" amount="1" /> */}
                      <div className={styles.showItemInfo}>0 / 1000</div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={styles.showItemDiv}>
                      <p className={styles.showItemP}>Price</p>
                      {/* <MintBtn txt="MINT 1" amount="1" /> */}
                      <div className={styles.showItemInfo}>0.25 ETH</div>
                    </div>
                  </Col>
                </Row>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <MintButton />
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginTop: "30px",
                      letterSpacing: "5px",
                      fontFamily: "times new roman",
                    }}
                  >
                    Launch date 1/22/2021 @ 8 PM EST
                  </p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              {/* <div className={styles.opening}>
                <p
                  style={{
                    fontFamily: "Rammetto",
                    fontSize: "42px",
                    color: "#3bb9ff",
                  }}
                >
                  LIL PUDGYS
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  What comes after 8888 Pudgy Penguins? 22222 Lil Pudgys.
                  <br />
                  Each Lil Pudgy is a unique collectible NFT randomly generated
                  from 400 traits.
                  <br />
                  Every Pudgy Penguin is eligible to claim a Lil Pudgy on
                  December 19th and all of the other Lil Pudgys are waiting to
                  be minted by anybody and everybody who wants to join The
                  Huddle!
                </p>
              </div> */}
              {/* <img src="assets/images/ice_open.png" /> */}
            </div>

            {/* <Project /> */}
            <Family />
          </Container>
        </div>
      </div>
    </DAppProvider>
  )
}

export default Home
