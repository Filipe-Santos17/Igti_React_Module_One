import { useState,useEffect } from "react"

export default function Timer() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setValue(currentValue => currentValue + 1)
        },1000)

        return () => {clearInterval(intervalo)}//Faz a limpeza dos dados 
    },[])

    return (
        <div className="bg-red-300 p-3">{value}</div>
    )
}
