import React, { useEffect, useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
} from "reactstrap"
import styles from "./Header.module.css"
const logo = "/assets/images/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div className="header">
      <Navbar
        style={{
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.8)",
          paddingLeft: "5%",
          paddingRight: "5%",
          height: "120px",
          width: "100%",
          borderBottom: "3px solid darkgoldenrod",
          zIndex: "1000",
        }}
        dark
      >
        <Row className="align-items-center" style={{ width: "100%" }}>
          <Col
            md={4}
            className="d-flex justify-content-evenly center"
            style={{ marginBottom: "55px" }}
          >
            <NavbarBrand href="/" className={styles.menuItem}>
              HOME
            </NavbarBrand>
            <NavbarBrand href="/profile" className={styles.menuItem}>
              SHIBA PROFILE
            </NavbarBrand>
          </Col>
          <Col md={4} className="d-flex justify-content-center center">
            <NavbarBrand href="/">
              <img src={logo} width="150px" />
            </NavbarBrand>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-end"
            style={{ marginBottom: "55px" }}
          >
            <NavbarBrand href="/login">
              <div className={styles.btnLogin}>CONNECT WALLET</div>
            </NavbarBrand>
          </Col>
        </Row>

        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "#fff" }} href="#faq">
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#fff" }} href="#contact">
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  )
}
