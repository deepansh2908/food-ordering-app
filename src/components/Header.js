import { useState } from 'react';
import FoodFireLogo from '../Images/Food Fire Logo.png';
import { Link } from 'react-router-dom'; // imported Link for client side routing
import { useNavigate } from 'react-router-dom';

// Title component for display logo
const Title = () => (
	<a href="/">
		<img
			className="logo"
			src={FoodFireLogo}
			alt="Food Fire Logo"
			title="Food Logo"
		/>
	</a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
	// use useState for user logged in or logged out
	const [isLoggedin, setIsLoggedin] = useState(true);
	const navigate = useNavigate();
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>

					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<i className="fa-solid fa-cart-shopping"></i>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
