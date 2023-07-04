import { useState } from "react"


const searchbar = (props: any) => {

    const [inputText, setInputText] = useState("")

    return(
        <input value={inputText} className={props.className} placeholder="Suche einen Raum..."
        onChange={(e) => {setInputText(e.target.value) 
            console.log(inputText)}}
        />
    )
}

export default searchbar