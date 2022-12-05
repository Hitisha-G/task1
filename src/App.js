import logo from './logo.svg';
import './App.css';
import {useEffect , useState} from "react";
import {Contract , providers} from "ethers";


function App() {
  const [isWalletInstalled , setIsWalletInstalled] = useState(false);

  const[account, setAccount] = useState(null);
  useEffect (()=> {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet(){
    window.ethereum
      .request(
        {
          method: "eth_requestAccounts",
        }
      )
      .then ((accounts)=> {
        setAccount(accounts[0]);
      })
      .catch((error)=> { 
        alert("Something went wrong");
      })
  }

  if (account === null){
    return(
      <div className="App" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"25%"
      }}>
        <button >
          Connect Wallet
        </button>  
      </div>
      
    ) ;
  }
    
    return (
      <div className = "App">
        <p> Connected as: {account}</p>
      </div>
    );

}

export default App;
