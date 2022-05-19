import Link from "next/link";
import Image from "next/image";
import Menuitems from "../data/menu.json";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <a className="navbar-brand mx-5">
                <Image
                  className="img-fluid"
                  src="/images/lavolottelogo.png"
                  width={60}
                  height={60}
                  alt="La Volotte"
                />
              </a>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav className="mx-5">
              <ul className="navbar-nav">
                {Menuitems.menu.main.map((item, index) => (
                  <li className="nav-item" key={index}>
                    {/* <Nav.Link>  */}
                      <Link href={item.URL}>
                        <a className="nav-link">{item.name}</a>
                      </Link>
                    {/* </Nav.Link> */}
                  </li>
                ))}



                <li className="nav-item" >
                 <button className="mx-5 cart snipcart-summary snipcart-checkout text-dark ">
                  <i className="ti ti-shopping-cart"></i>
                  <span className="badge badge-primary snipcart-items-count"></span>
                  <br />(<span className="snipcart-total-price"></span>)
                </button>
                </li>

                
              </ul> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
