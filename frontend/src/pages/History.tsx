import '../styles/History.css';
import NavBar from '../components/HistoryNavBar';
import Header from '../components/HistoryHeader';
import PurchaseHistoryImage from '../other_icons/PurchaseHistory.svg';

function History() {
    return (
        <div className ="purchase-history">
              <Header />
                <div className = "purchase-history-image">
                    <img src = {PurchaseHistoryImage} alt = "History"></img>
                </div>
              <NavBar />
        </div>
    );
  }
  
  export default History;