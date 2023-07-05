import { useEffect, useState } from "react"
import { BasicRoomDetails } from "../functions/fetchRooms"
import RoomCard from "./RoomCard"
import styled from "styled-components"

interface ISidebar {
    handleOnClick: (room: BasicRoomDetails | undefined) => void,
    handelLevelChange: (level: number) => void,
    selectedLevel: number | undefined
    selectedRoom?: BasicRoomDetails,
    inputSearch: string
    className: string,
    rooms: BasicRoomDetails[]
}

const StyledButton = styled.button`
    flex-flow: column;
    background-color: "white";
    margin-bottom: 3px;
    padding-top: 1px;
    height: 40px;
    width: 100%;
    color: black;
    border: none;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    transition: background-color .15s ease-in;

    &:hover {
      background-color: "lightgray";
      cursor: pointer;
  }
`

const Sidebar = (props: ISidebar) => {

    const [filteredArray,setFilteredArray] = useState<BasicRoomDetails[]>(props.rooms)

    const levels = [1,2,3,4,5]

    const makeName = (room: BasicRoomDetails) => {
        return `${room.floor}.${room.building_section}.${room.room + room.subroom_description}`
       }

    useEffect(() => {
        setFilteredArray(props.rooms.filter((room) => makeName(room).includes(props.inputSearch)))
        
    },[props.rooms,props.inputSearch,props.selectedLevel])

    return(
        <div {...props}>
            <p>This is a sidebar.</p>
            <div className="RoomCard-List" style={{
                overflow: "scroll",
                height: "80%",
            }}>
                {
                levels.map((level,index) => {
                  return (<>
                  <StyledButton onClick={() => props.handelLevelChange(level)}>Etage {level}</StyledButton>
                {filteredArray.length ? 
                filteredArray
                .filter((room) => 
                props.selectedLevel ? room.floor === props.selectedLevel : room
                )
                .filter((room) => level === room.floor)
                .map((room,index) => 
                <RoomCard key={index} 
                selectedRoom={props.selectedRoom}
                room={room} 
                name={makeName(room)}
                handleOnClick={props.handleOnClick}/>
                )
                :
                <div>No Results</div>}
                </>)})}
                
            {/* {
            levels.map(level => {
              return <>
                <button onClick={_ => props.handelLevelChange(level)}>Etage {level}</button>
                {level.rooms.map(room => {
                  test.roomNr = room
                  return <button className={'room-button'} onClick={_ => handelRoomSelect(test)}>Raum {test.roomNr}</button> 
                })}
                <br />
              </>
            })
          } */}
            </div>
        </div>
    )
}

export default Sidebar