import { createContext, useState, useEffect } from "react";
import { fetchAssets, fakeFetchCrypto } from '../api';
import { percentDifference } from '../utils'
import { useContext } from 'react';

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
})

export function CryptoContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])
  
  useEffect(() =>{
      async function preload() {
        setLoading(true)
        const { result } = await fakeFetchCrypto()
        const assets = await fetchAssets()

        setAssets(assets.map(asset => {
          const coin = result.find((c) => c.id === asset.id)
          return {
            grow: asset.price < coin.price, //рост/падение цены монеты с момента покупки
            growPercent: percentDifference(asset.price, coin.price), //процент роста/падения монеты
            totalAmount: asset.amount * coin.price, //сколько в деньгах у нас есть конкретной монеты 
            totalProfit: asset.amount * coin.price - asset.amount * asset.price, //сколько заработали/потеряли 

            ...asset
          }
        }))
        setCrypto(result)
        setLoading(false)
      }
      preload()
    }, [])

    return <CryptoContext.Provider value={{loading, crypto, assets}}>{children}</CryptoContext.Provider>
}

export default CryptoContext

export function useCrypto() {
  return useContext(CryptoContext)
}