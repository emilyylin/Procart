import '../styles/NavBar.css';
import BlackHistory from "../navbar_icons/history-black.png";
import BlackCart from "../navbar_icons/cart-black.png";
import BlackBudget from "../navbar_icons/budget-black.png";
import PinkHistory from "../navbar_icons/history-pink.png";
import PinkCart from "../navbar_icons/cart-pink.png";
import PinkBudget from "../navbar_icons/budget-pink.png";
import Cart from '../pages/Cart';
import Budget from '../pages/Budget';
import History from '../pages/History';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';

function HistoryNavBar() {
  return (
    <div className="navbar">
        <div className="navbar-border"> </div>
            <li><a onClick={() => goTo(History)}> <img className="navbar-icon" src={PinkHistory} alt="history"></img> </a></li>
            <li><a onClick={() => goTo(Cart)}> <img className="navbar-icon" src={BlackCart} alt="cart"></img> </a></li>
            <li><a onClick={() => goTo(Budget)}> <img className="navbar-icon" src={BlackBudget} alt="budget"></img> </a></li>
    </div>
  );
}

export default HistoryNavBar;
