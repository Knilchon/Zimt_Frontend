import { Dispatch, SetStateAction } from "react"

interface ISearchbarProps {
    className: string,
    inputText: string,
    setInputText: Dispatch<SetStateAction<string>>
    placeholder?: string
}

const Searchbar = (props: ISearchbarProps) => {
    return (
        <input value={props.inputText} {...props}
            onChange={(e) => { props.setInputText(e.target.value) }}
        />
    )
}

export default Searchbar