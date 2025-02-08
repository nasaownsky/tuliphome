import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageSearchRounded, StarRounded } from "@material-ui/icons"

import "./card.scss"

const eliteSorts = ["Махровые", "Попугайные", "Бахромчатые"]

const Card = ({ tulips }) => {
  return (
    <>
      {tulips.map(item => {
        const image = getImage(item.image)

        const isElite = eliteSorts.includes(item.sort);

        return (
          <div key={item.title} className="card">
            <div className="card-body">
              {isElite && <StarRounded className="elite-icon" />}
              <div className="card-image">
                {image ? (
                  <GatsbyImage image={image} alt="🌷" objectFit="contain" />
                ) : (
                  <ImageSearchRounded
                    className="placeholder"
                    fontSize="large"
                  />
                )}
              </div>
              <div className="textfield">
                <h3>{item.title}</h3>
                {/* <p>{item.amount && `В наличии: ${item.amount} шт.`}</p> */}
                <p>{item.sort}</p>
                <p>{item.color}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card
