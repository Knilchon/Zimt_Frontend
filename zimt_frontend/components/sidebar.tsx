import { BasicRoomDetails } from "../functions/fetchRooms"
import RoomCard from "./RoomCard"

interface ISidebar {
    handleOnClick: (room: BasicRoomDetails | undefined) => void,
    selectedRoom?: BasicRoomDetails,
    inputSearch: string
    className: string,
    rooms: BasicRoomDetails[]
}

const Sidebar = (props: ISidebar) => {

    const makeName = (room: BasicRoomDetails) => {
        return `${room.level}.${room.section}.${room.roomNr + room.prefix}`
       }

    return(
        <div className={props.className}>
            <p>This is a sidebar.</p>
            <div className="RoomCard-List" style={{
                overflow: "scroll",
                height: "80%",
            }}>
                {props.rooms ? props.rooms.filter((room) => makeName(room).includes(props.inputSearch)).map((room,index) => 
                <RoomCard key={index} 
                selectedRoom={props.selectedRoom}
                className="RoomCard"
                room={room} 
                name={makeName(room)}
                handleOnClick={props.handleOnClick}/>
                ):
                <></>
                }
            </div>
        </div>
    )
}

export default Sidebar