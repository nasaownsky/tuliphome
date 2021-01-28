import React from "react"

import "./card.scss"

const Card = ({ tulips }) => {
  return (
    <>
      {tulips.map(item => (
        <div key={item.title} className="card">
          <div className="card-body">
            <div className="card-image">
            <img src={item.image.file.url} alt={item.title} />
            </div>
            <div className="textfield">
              <h3>{item.title}</h3>
              {/* <p>{item.amount && `В наличии: ${item.amount} шт.`}</p> */}
              <p>{item.sort}</p>
              <p>{item.color}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
