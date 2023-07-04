import RoomCard from "./RoomCard"

const sidebar = (props: any) => {
    return(
        <div className={props.className}>
            <p>This is a sidebar.</p>
            <RoomCard room={{level:1, section:2, roomNr:12, prefix:""}} handleOnClick={props.handleOnClick}></RoomCard>
        </div>
    )
}

export default sidebar