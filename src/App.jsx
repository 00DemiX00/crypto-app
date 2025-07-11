import AppLayout from './components/layout/AppLayout';
import PortfolioChart from './components/PortfolioChart';
import { CryptoContextProvider } from './context/crypto-context';



export default function App () {
  return (
  <CryptoContextProvider>
    <AppLayout></AppLayout>
  </CryptoContextProvider>
  
      )
}
