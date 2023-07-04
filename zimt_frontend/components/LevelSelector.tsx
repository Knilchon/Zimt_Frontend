import { Dispatch, SetStateAction } from "react"
import { styled } from "styled-components"
import LevelButton from "./LevelButton"
import Layers from "../assets/layers.svg"

interface ILevelSelectorProps{
    selectedLevel: number
    setSelectedLevel: Dispatch<SetStateAction<number>>
}

const StyledDiv = styled.div`
    display: flex;
    felx-flow: row;
    background-color: #192131;
    height: 300px;
    width: 300px;
`

const LevelSelector = (props: ILevelSelectorProps) => {

    const levels = [1,2,3,4,5]

    return(
        <StyledDiv>
            <div style={{display: "flex", flexFlow: "column"}}>
            {levels.map((level: number,index) => <LevelButton key={index} {...props} level={level} />)}
            </div>
        </StyledDiv>
        )
}
export default LevelSelector