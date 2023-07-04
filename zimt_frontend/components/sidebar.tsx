import { useEffect, useState } from "react"
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

    const [filteredArray,setFilteredArray] = useState<BasicRoomDetails[]>(props.rooms)

    const makeName = (room: BasicRoomDetails) => {
        return `${room.level}.${room.section}.${room.roomNr + room.prefix}`
       }

    useEffect(() => {
        setFilteredArray(props.rooms.filter((room) => makeName(room).includes(props.inputSearch)))
        
    },[props.rooms,props.inputSearch])

    return(
        <div {...props}>
            <p>This is a sidebar.</p>
            <div className="RoomCard-List" style={{
                overflow: "scroll",
                height: "80%",
            }}>
                {filteredArray.length ? 
                props.rooms ? filteredArray.map((room,index) => 
                <RoomCard key={index} 
                selectedRoom={props.selectedRoom}
                className="RoomCard"
                room={room} 
                name={makeName(room)}
                handleOnClick={props.handleOnClick}/>
                ):
                <div>Loading ...</div>
                :
                <div>No Results</div>
            }
            </div>
        </div>
    )
}

export default Sidebar