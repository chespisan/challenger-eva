/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getCryptoService } from "../../services/crypto-service/getCrypto.service";


export const CryptoContainer = () => {
  const [loading, setIsLoading] = useState(true);
  const [cryptos, setCryptos] = useState<any>([]);


  const handleGetCrypto = async (): Promise<void> => {
    try {
      const cryptoData = await getCryptoService();
      if (cryptoData) setIsLoading(false);
      handleFormatData(cryptoData.RAW);
    } catch (error) {
      console.log('err: ', error);
    }
  }

  const handleFormatData = (cryptoData: any): void => {
    Object.keys(cryptoData).map((crypto) => {
      setCryptos((prev: any) => [...prev, {
        ...cryptos,
        key: crypto,
        price: cryptoData[crypto]["USD"]?.price,
        market_cap: cryptoData[crypto]["USD"]?.MKTCAP,
        circulatingSupply: cryptoData[crypto]["USD"]?.SUPPLY,
        name: cryptoData[crypto]["USD"]?.FROMSYMBOL,
      }])
    });
  }

  useEffect(() => {
    handleGetCrypto();
  }, [])

  return (
    <>
      {loading
        ? <div>loading...</div>
        : <div className="App">
          <div>
            <label>Filter By</label>
            <select>
              <option>Name</option>
              <option>Price</option>
              <option>Market Cap</option>
              <option>Circulating supply</option>
            </select>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Circulating supply</th>
            </tr>

            <tbody>
              {
                cryptos 
                ? cryptos.map((data: any) => (
                  <tr key={data.key}>
                    <td>Name: {data?.name}</td>
                    <td>Price: {data?.price}</td>
                    <td>Market Cap: {data?.market_cap}</td>
                    <td>Circulating supply: {data?.circulatingSupply}</td>
                  </tr>
                )
                ) 
                : <p>No hay elemnto</p> 

              }
            </tbody>
          </table>
        </div>
      }
    </>
  )
}
