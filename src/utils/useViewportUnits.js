import { useEffect, useState } from "react"

const useViewportUnits = () => {
  const [vh, setVh] = useState(0)

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight * 0.01)

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return vh
}

export default useViewportUnits
