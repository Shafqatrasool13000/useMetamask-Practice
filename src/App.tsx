import './App.css';
import { useMetamask, } from "use-metamask";
import { useEffect} from 'react';
import { ethers } from 'ethers';
import GetInfo from './components/GetInfo';


function App() {
  const { connect, metaState } = useMetamask();

// Connect To Metamsk 
  useEffect(() => {
    if (!metaState.isConnected) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider);
        } catch (error) {
          // console.log('Added in Error');
        }
      })();
    }
  }, []);
  
  return (
    <div className="App">
      <GetInfo />
    </div>
  );
}

export default App;
