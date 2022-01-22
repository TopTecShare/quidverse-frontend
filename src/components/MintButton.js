import React, { useEffect, useState } from "react"
import Web3 from "web3"
import contractAbi from "../abi/contractABI.json"
import { Row, Col, Container } from "reactstrap"

import styles from "../styles/style.module.css"
// import Modal from "@material-ui/core/Modal"
// import Backdrop from "@material-ui/core/Backdrop"
// import Fade from "@material-ui/core/Fade"
// import { makeStyles } from "@material-ui/core/styles"
// import { StylesContext } from "@material-ui/styles"

function MintButton() {
  const [count, setCount] = useState(1)
  const [mintCount, setMintCount] = useState(0)

  useEffect(() => {
    const web3 = window.ethereum ? new Web3(window.ethereum) : null
    if (!web3) {
      alert("non-ethereum browser detected! please install wallet!")
    } else {
      const contractAddress = "0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5"
      const contract = new web3.eth.Contract(contractAbi, contractAddress)

      window.ethereum.on("chainChanged", (chainId) => {
        if (Number(chainId) !== 1) {
          alert("Please switch to Ethereum mainnet in your wallet")
        } else window.location.reload()
      })

      if (!!contract) {
        contract.methods
          .totalSupply()
          .call()
          .then((res) => {
            setMintCount(res)
          })
          .catch((err) => {
            console.log(err)
          })

        contract.events
          .CreateTentacleKnockout()
          .on("data", (event) => {
            setMintCount(Number(mintCount) + 1)
          })
          .on("error", (error) => {
            console.log(error)
          })
      }
    }
  }, [])
  const mintToken = async () => {
    const web3 = window.ethereum ? new Web3(window.ethereum) : null
    if (!web3) {
      alert("non-ethereum browser detected! please install wallet!")
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
      <Row style={{ paddingTop: 48, margin: "0 auto" }}>
        <Col md={4}>
          <div className={styles.showItemDiv}>
            <p className={styles.showItemP}>Title</p>
            <div className={styles.showItemInfo}>TKOs v1</div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.showItemDiv}>
            <p className={styles.showItemP}>Items</p>
            <div className={styles.showItemInfo}>{mintCount} / 1000</div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.showItemDiv}>
            <p className={styles.showItemP}>Price</p>
            <div className={styles.showItemInfo}>0.25 ETH</div>
          </div>
        </Col>
      </Row>
      <div className={styles.mintCount}>
        <span>Quantity: </span>
        <input
          type="number"
          min="1"
          max="20"
          style={{
            backgroundColor: "transparent",
            color: "#3bb9ff",
            border: "none",
          }}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <p
          style={{
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            fontFamily: "times new roman",
          }}
        >
          Max 20 NFTs per transaction
        </p>
      </div>
      <button
        onClick={() => mintToken()}
        style={{
          backgroundColor: "yellow",
          border: 0,
          cursor: "pointer",
          marginLeft: "20px",
          marginTop: "30px",
          padding: "0 20px",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontFamily: "Rammetto",
            color: "red",
            fontSize: "40px",
            marginTop: "20px",
          }}
        >
          MINT YOUR TKO
        </p>
      </button>
    </div>
  )
}

export default MintButton
