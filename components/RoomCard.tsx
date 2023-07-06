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
    height: 40px;
    width: auto;
    color: black;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    transition: background-color .15s ease-in;

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