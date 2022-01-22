import React, { useEffect, useState } from "react"
import Web3 from "web3"
import contractAbi from "../abi/contractABI.json"

import styles from "../styles/style.module.css"
// import Modal from "@material-ui/core/Modal"
// import Backdrop from "@material-ui/core/Backdrop"
// import Fade from "@material-ui/core/Fade"
// import { makeStyles } from "@material-ui/core/styles"
// import { StylesContext } from "@material-ui/styles"

function MintButton() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    window.ethereum.on("chainChanged", (chainId) => {
      alert(chainId)
    })
  }, [])
  const mintToken = async () => {
    const web3 = window.ethereum ? new Web3(window.ethereum) : null
    const contractAddress = "0x215fC765c38d0a5fBAC83d36B20E2aa444D504C8"
    const contract = new web3.eth.Contract(contractAbi, contractAddress)
    const _account = await web3.eth.getAccounts()

    const price = 250000000000000000 // 0.08 eth

    try {
      await contract.methods.mint(count).send({
        from: _account[0],
        value: price * count,
      })
      // setText(
      //   "Successfully Minted. Please visit https://opensea.io/collection/wulfz-official"
      // );
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className={styles.mintCount}>
        <span>Count: </span>
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
      </div>
      <button
        onClick={() => mintToken()}
        style={{
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer",
          marginLeft: "20px",
        }}
      >
        <img src="/assets/images/mintbutton.png" />
      </button>
    </div>
  )
}

export default MintButton
