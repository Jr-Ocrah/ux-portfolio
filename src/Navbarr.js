import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

import { Link } from "react-router-dom";


function Navbarr() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	return (
		<div className="dive">
		<Link to="/"><h3>JR</h3></Link>
<header>
		
		<nav ref={navRef}>
		<Link to="/casestudies" >Case Studies</Link>
		<Link to="/redesigns" >Redesigns</Link>
		<Link to= "/resume">Resume</Link>
		<Link to="/sendmessage" >Contact</Link>
	
			
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

export default Navbarr;
