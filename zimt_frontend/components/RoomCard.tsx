const RoomCard = (props: {room : any, handleOnClick: () => void}) => {

    const makeName = (room: any) => {
     return `${room.level}.${room.section}.${room.roomNr + room.prefix}`
    }

    return(
        <div 
        onClick={props.handleOnClick}
        style={{
        backgroundColor: "white",
        height: "5%",
        width: "auto",
        }}>
        {makeName(props.room)}
        </div>
    )
}

export default RoomCard