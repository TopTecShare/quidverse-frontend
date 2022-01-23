import styles from "../styles/style.module.css"
import { Row, Col } from "reactstrap"

const Famous = () => {
  return (
    <div className={`${styles.famous} flex flex-row space-x-12`}>
      <div className="w-full md:w-6/12">
        <p
          style={{
            fontSize: "32px",
            fontWeight: "900",
            color: "#fe6810",
          }}
        >
          WELCOME TO THE QUIDVERSE: MINT TO UNLOCK
        </p>
        <p style={{
          color: "white",
        }}>
          The Quidverse is the first and only underwater metaverse populated
          by the fastest growing creature in the ocean-- the squid. In the
          Squid Metaverse (Quidverse) you can make real money in a virtual
          world, socially connect, find real world jobs (by connecting), play
          P2E arcade games, and more. The TKO NFT collection is your key to
          the metaverse.
        </p>
      </div>
      <div className="hidden md:block md:w-6/12">
        <img src="/assets/images/NFT_TKOs.gif" className="w-full h-auto rounded-2xl" />
      </div>
    </div>
  )
}

export default Famous
