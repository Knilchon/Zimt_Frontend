const lookupPage = (props: any) =>{
    return(
        <div className='lookup-page'>   
            {props.selectedRoom.level}.{props.selectedRoom.section}.{props.selectedRoom.roomNr}
        </div>
    )
}

export default lookupPage