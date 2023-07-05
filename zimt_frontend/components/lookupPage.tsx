const lookupPage = (props: any) =>{
    return(
        <div className='lookup-page'>   
            {props.selectedRoom.floor}.{props.selectedRoom.building_section}.{props.selectedRoom.room}
        </div>
    )
}

export default lookupPage