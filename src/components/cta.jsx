import { Button, IconButton, Tooltip, TextField } from "@material-ui/core"
import { ArrowDownwardRounded, ShareRounded } from "@material-ui/icons"
import React from "react"

const Cta = props => {
  const [inputValue, setInputValue] = React.useState(510)
  const [cost, setCost] = React.useState(500)

  const Share = () => {
    if (navigator.share !== undefined) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => console.log("Successful share! 🎉"))
        .catch(err => console.error(err))
    } else {
      window.location.href =
        "https://t.me/share/url?url=https://tuliphome.netlify.app/"
    }
  }

  const Scroll = () => {
    window.scrollBy({
      top: window.innerHeight + 40,
      left: 0,
      behavior: "smooth",
    })
  }

  const Calc = (value, result) => {
    if (value <= 1000) {
      result = value * 0.98
    } else if (value <= 3000) {
      result = value * 0.97
    } else if (value <= 5000) {
      result = value * 0.96
    } else {
      result = value * 0.95
    }

    setCost(Math.round(result))
  }

  return (
    <div className="cta">
      <div className="content">
        <h1>Тюльпаны оптом</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed eos
          itaque earum quod blanditiis omnis saepe, optio id error? Praesentium
          impedit ex aliquam magnam. Omnis ipsam placeat illo quisquam labore
          suscipit expedita iusto incidunt. Labore aut repellendus consectetur
          nobis, adipisci officia!
        </p>
        <div className="prices">
          <span className="cost">~ {cost} BYN</span>
          <span>
            <TextField
              
              defaultValue={510}
              onChange={e => Calc(e.target.value)}
              type="number"
              placeholder="0"
              variant="outlined"
              label="штук"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 15,
                min: 510,
                max: 35000,
                maxLength: 5,
                inputMode: "numeric",
              }}
            />
          </span>
          {/* <Button
            className="button"
            variant="contained"
            color="primary"
            size="large"
          >
            Купить
          </Button> */}
        </div>
        <br />
        <Tooltip title="Поделиться" placement="right">
          <IconButton onClick={() => Share()}>
            <ShareRounded />
          </IconButton>
        </Tooltip>
        <IconButton onClick={() => Scroll()} className="scroll-arrow">
          <ArrowDownwardRounded />
        </IconButton>
      </div>
    </div>
  )
}

export default Cta
