import React, { useEffect, useState } from "react"
import contractAbi from "../abi/contractABI.json"
import { Row, Col, Container } from "reactstrap"

import styles from "../styles/style.module.css"
// import Modal from "@material-ui/core/Modal"
// import Backdrop from "@material-ui/core/Backdrop"
// import Fade from "@material-ui/core/Fade"
// import { makeStyles } from "@material-ui/core/styles"
// import { StylesContext } from "@material-ui/styles"

function MintButton({ web3 }) {
  const [count, setCount] = useState(1)
  const [mintCount, setMintCount] = useState(0)

  useEffect(() => {
    if (!web3) {
      alert("Please use desktop or DApp browser if you are not already.")
    } else {
      const contractAddress = "0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5"
      const contract = new web3.eth.Contract(contractAbi, contractAddress)

      if (!!contract) {
        contract.methods.totalSupply().call()
          .then((res) => {
            setMintCount(res)
          })
          .catch((err) => {
            console.log(err)
          })

        contract.events.CreateTentacleKnockout()
          .on("data", (event) => {
            setMintCount(Number(mintCount) + 1)
          })
          .on("error", (error) => {
            console.log(error)
          })
      }
    }
  }, [web3])

  const mintToken = async () => {
    if (!web3) {
      alert("Please use desktop or DApp browser if you are not already.")
    } else {
      const contractAddress = "0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5"
      const contract = new web3.eth.Contract(contractAbi, contractAddress)
      const _account = await web3.eth.getAccounts()
      const price = 250000000000000000 // 0.08 eth

      try {
        await contract.methods.mint(count).send({
          from: _account[0],
          value: price * count,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row mt-12 md:space-x-12 md:space-y-0 space-y-12" style={{ display: "flex", backgroundColor: "transparent", paddingBottom: "20px" }}>
        <div className={styles.showItemDiv}>
          <p className={styles.showItemP}>LAUNCH</p>
          <div className={styles.showItemInfo}>1/22/22 @ 12 EST</div>
        </div>
        <div className={styles.showItemDiv}>
          <p className={styles.showItemP}>NFTS</p>
          <div className={styles.showItemInfo}>{mintCount} / 1000</div>
        </div>
        <div className={styles.showItemDiv}>
          <p className={styles.showItemP}>MINT PRICE</p>
          <div className={styles.showItemInfo}>0.25 ETH</div>
        </div>
      </div>
      <div style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", paddingTop: "30px" }}>
        <button
          className="bg-accent2 text-accent1 hover:bg-accent1 hover:text-accent2 transition duration-150 text-3xl md:text-4xl font-black italic"
          onClick={() => mintToken()}
          style={{
            border: "2px #fe6810 solid",
            cursor: "pointer",
            padding: "20px",
            borderRadius: "0",
            width: "36rem"
          }}
        >
          MINT TKO NOW
        </button>
      </div>

      <div className={`${styles.mintCount}`}>
        <div className="mt-2 italic" style={{ fontSize: "16px" }}>
          MAX 20 PER TX
        </div>
        <div className="flex items-center space-x-4 rounded-2xl px-4 py-3">
          <p className="text-white font-semibold uppercase">Quantity:</p>
          <input className="w-36 outline-none rounded-2xl bg-accent4 text-white font-bold text-center"
            type="number"
            min="1"
            max="20"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default MintButton
