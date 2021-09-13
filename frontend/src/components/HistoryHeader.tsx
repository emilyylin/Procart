import '../styles/Header.css';
import ProcartLogo from "../header_icons/procart_logo.png";
import PurpleYeti from "../header_icons/purple-yeti.png";


function HistoryHeader() {
  return (
    <div className="header">
        <div className="header-items">
            <li><b><div className="header-logo"> <img className="procart-logo" src={ProcartLogo} alt = "Procart" /></div></b></li>
            <li><b><div className="header-title">History</div></b></li>
            <li><b><div className="header-icon"> <img src={PurpleYeti} alt = "User" /> </div></b></li>
        </div>

    </div>
  );
}

export default HistoryHeader;
