import '../styles/Budget.css';
import NavBar from '../components/BudgetNavBar';
import Header from '../components/BudgetHeader';
import BudgetImage from '../other_icons/budget-photo.png';

function Budget() {
    return (
        <div className ="budget-page">
              <Header />
                <div className = "budget-image">
                    <img src = {BudgetImage} alt = "Budget"></img>
                </div>
              <NavBar />
        </div>
    );
  }
  
  export default Budget;