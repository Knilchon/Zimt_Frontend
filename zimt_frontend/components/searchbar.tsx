import { useState } from "react"


const searchbar = (props: any) => {

    const [inputText,setInputText] = useState("")

    return(
        <input value={inputText} className={props.className}
        onChange={(e) => {setInputText(e.target.value)}}
        />
    )
}

export default searchbar