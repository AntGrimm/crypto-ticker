import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cell from '../components/Cell'

const HomePage = () => {
  const [currencyData, setCurrencyData] = useState([])

  const fetchDataCrypto = async () => {
    const resp = await axios.get(
      'https://api.coinmarketcap.com/v2/ticker/?limit=20'
    )
    console.log(Object.values(resp.data.data))
    setCurrencyData(Object.values(resp.data.data))
  }

  useEffect(() => {
    setInterval(() => {
      fetchDataCrypto()
    }, 10000)
    fetchDataCrypto()
  }, [])

  return (
    <>
      <h1>Crypto Ticker!</h1>
      <section>
        <table>
          <thead>
            <td>Currency</td>
            <td>Symbol</td>
            <td>Price</td>
          </thead>
          <tbody>
            {currencyData.map((coin, j) => {
              return (
                <tr key={j}>
                  <Cell
                    key={j}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.quotes.USD.price.toFixed(2)}
                  />
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default HomePage
