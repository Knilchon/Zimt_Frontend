import { styled } from "styled-components"
import { BasicRoomDetails } from "../functions/fetchRooms"

interface IRoomCard {
    name: string
    room: BasicRoomDetails,
    selectedRoom?: BasicRoomDetails,
    handleOnClick: (room: BasicRoomDetails | undefined) => void
}

interface IStyledRoomCardProps {
    isSelected?: boolean
}

const StyledRoomCard = styled.div<IStyledRoomCardProps>`
    flex-flow: column;
    background-color: ${(props) => props.isSelected ? "lightblue" : "white"};
    margin-bottom: 3px;
    padding-top: 1px;
    height: 5vh;
    width: 90%;
    color: black;
    border-radius: 8px;
    text-align: center;
    transition: background-color .15s ease-in;
    flex-shrink: 0;

    &:hover {
        background-color: ${(props) => props.isSelected ? "lightblue" : "lightgray"};;
        cursor: pointer;
    }
`

const RoomCard = (props: IRoomCard) => {
    return (
        <StyledRoomCard
            isSelected={props?.selectedRoom && props.room.id === props.selectedRoom.id}
            {...props}
            onClick={() => {
                !props?.selectedRoom || !(props.room.id === props.selectedRoom.id) ?
                    props.handleOnClick(props.room) : props.handleOnClick(undefined)
                }
            }
        >
            {props.name}
        </StyledRoomCard>
    )
}
export default RoomCard