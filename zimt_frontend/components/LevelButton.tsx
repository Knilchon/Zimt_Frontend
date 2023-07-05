import { Dispatch, SetStateAction } from "react"
import { styled } from "styled-components"

interface ILevelButtonProps{
    level: number
    selectedLevel: number | undefined
    setSelectedLevel: Dispatch<SetStateAction<number|undefined>>
}

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
    background-color: black;
    height: 300px;
    width: 300px;

    &:hover{
        cursor: pointer;
    }
`

const LevelButton = (props: ILevelButtonProps) => {
    return(
        <StyledDiv onClick={() => props.setSelectedLevel(props.level)}>
                {props.level}
        </StyledDiv>
        )
}
export default LevelButton