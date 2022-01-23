import styles from "../styles/style.module.css"
import { Row, Col } from "reactstrap"

function Family() {
  return (
    <div>

      <div style={{ color: "white" }}>
        <p
          className={styles.fair}
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            paddingBottom: "16px",
            marginBottom: "0",
            marginTop: "18px",
          }}
        >
          PRIZES: ALL TKO MINTERS ELIGIBLE
        </p>

        <div className={styles.border}>
          <p style={{ fontSize: "20px" }}>
            Three prizes will depend on what you mint. The more you mint the
            higher your chance will be to get those prestige prizes. Those are
            ultra rare because they only appear once in the entire collection
            (i.e. the Rolex attribute). Five cash prizes for a random NFT-- you
            can win more than one cash prize. The more you mint the more you can
            win.
          </p>
        </div>
      </div>
      <div className={`${styles.family}`}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 mt-12 mb-16 mx-auto">
          <div className="w-72" style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "stretch", alignContent: "center" }}>
            <p className="font-lg font-bold italic text-white">ROLEX TENTACLE PROP:</p>
            <img
              src="assets/images/rolex_asset.png"
              className={styles.team_member_pic}
            />
            <p className={styles.image_description} style={{ color: "white", fontSize: "16px" }}>
              Win a $40,000 customized Rolex.
            </p>
          </div>
          <div className="w-72" style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "stretch", alignContent: "center" }}>
            <p className="font-lg font-bold italic text-white">BEACH BACKGROUND:</p>
            <img
              src="assets/images/beach_background.png"
              className={styles.team_member_pic}
            />
            <p className={styles.image_description} style={{ color: "white", fontSize: "16px" }}>
              Win a family vacation worth $10,500.
            </p>
          </div>
          <div className="w-72" style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "stretch", alignContent: "center" }}>
            <p className="font-lg font-bold italic text-white">ALI V LISTON SCENE:</p>
            <img
              src="assets/images/ali_gloves.png"
              className={styles.team_member_pic}
            />
            <p className={styles.image_description} style={{ color: "white", fontSize: "16px" }}>
              Win a signed Muhammad Ali glove.
            </p>
          </div>
          <div className="w-72" style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "stretch", alignContent: "center" }}>
            <p className="font-lg font-bold italic text-white">15 RANDOM NFTS:</p>
            <img
              src="assets/images/TKO_Game.png"
              className={styles.team_member_pic}
            />
            <p className={styles.image_description} style={{ color: "white", fontSize: "16px" }}>
              15 random NFTs win $1,000 each automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Family
