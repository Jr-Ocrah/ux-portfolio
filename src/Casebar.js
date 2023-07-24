import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import {HashLink as Linkh} from "react-router-hash-link";
import { Link } from "react-router-dom"


function Casebar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	return (
		<div className="allhead">
<header>
		
		<nav ref={navRef}>
			<Linkh to="#pro" smooth>Overview</Linkh>
		<Linkh to="#under" smooth>Understanding the User</Linkh>
		<Linkh to="#start" smooth>Starting the design</Linkh>
        <Linkh to="#refine" smooth>Refining the Design</Linkh>
        <Linkh to="#take" smooth>Take Aways</Linkh>
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

export default Casebar;