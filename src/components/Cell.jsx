import React from 'react'

const Cell = props => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.symbol}</td>
      <td>${props.price}</td>
    </>
  )
}

export default Cell
