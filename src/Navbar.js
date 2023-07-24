import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import {HashLink as Linkh} from "react-router-hash-link";
import { Link } from "react-router-dom"


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	return (
		<div className="allhead">
		<Linkh to="#home" smooth ><h3>JR</h3></Linkh>
<header>
		
		<nav ref={navRef}>
			<Linkh to="#casestudies" smooth>Case Studies</Linkh>
		<Linkh to="#redesigns" smooth>Redesigns</Linkh>
		<Link to= "/resume">Resume</Link>
		<Linkh to="#connect" smooth>Contact</Linkh>
			<button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
		</nav>
		<button
			className="nav-btn"
			onClick={showNavbar}>
			<FaBars />
		</button>
		
	</header>
		</div>
	
);
		
}

export default Navbar;
