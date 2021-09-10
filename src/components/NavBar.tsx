import '../styles/NavBar.css';
import BlackHistory from "../navbar_icons/history-black.png";
import BlackCart from "../navbar_icons/cart-black.png";
import BlackBudget from "../navbar_icons/budget-black.png";
import PinkHistory from "../navbar_icons/history-pink.png";
import PinkCart from "../navbar_icons/cart-pink.png";
import PinkBudget from "../navbar_icons/budget-pink.png";

function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-border"> </div>
            <li><a href="#history"> <img className="navbar-icon" src={BlackHistory} alt="history"></img> </a></li>
            <li><a href="#cart" > <img className="navbar-icon" src={PinkCart} alt="cart"></img> </a></li>
            <li><a href="#budget" > <img className="navbar-icon" src={BlackBudget} alt="budget"></img> </a></li>
    </div>
  );
}

export default NavBar;
