import { Dispatch, SetStateAction } from "react"

interface ISearchbarProps {
    className: string,
    inputText: string,
    setInputText: Dispatch<SetStateAction<string>>
}

const Searchbar = (props: ISearchbarProps) => {
    return (
        <input value={props.inputText} className={props.className}
            onChange={(e) => { props.setInputText(e.target.value) }}
        />
    )
}

export default Searchbar