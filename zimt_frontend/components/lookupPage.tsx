const lookupPage = (props: any) =>{
    return(
        <div className='lookup-page'>   
            <div className='lookup-page-part'>
                <b>Raum:</b> {props.selectedRoom.floor}.{props.selectedRoom.building_section}.{props.selectedRoom.room}{props.selectedRoom.subroom_description}
            </div>
            <div className='lookup-page-part'>
                <b>Sitzplätze:</b> {props.selectedRoom.seats} <br/>
                <b>Ausstattung:</b> {props.selectedRoom.quantity}x {props.selectedRoom.item_name}
            </div>
        </div>
    )
}

export default lookupPage