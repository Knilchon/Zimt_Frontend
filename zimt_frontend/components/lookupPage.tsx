import { Dispatch, SetStateAction } from "react"
import { Booking } from "../functions/PostRoomBooking"
import { BasicRoomDetails } from "../functions/fetchRooms"
import BookingForm from "./BookingForm"
import BookingTable from "./BookingTable"

interface ILookupPageProps{
    selectedRoomBookings: Booking[]| undefined
    selectedRoom: BasicRoomDetails | undefined
    postRequest: Booking,
    setPostRequest: Dispatch<SetStateAction<Booking>>,
    setSelectedRoomBookings: Dispatch<SetStateAction<Booking[] | undefined>>
}

const lookupPage = (props: ILookupPageProps) =>{
    return(
        <div className='lookup-page'>   
            <div className='lookup-page-part'>
                <b>Raum:</b> {props.selectedRoom?.floor}.{props.selectedRoom?.building_section}.{props.selectedRoom?.room}{props.selectedRoom?.subroom_description}
            </div>
            <div className='lookup-page-part'>
                <b>Sitzplätze:</b> {props.selectedRoom?.seats} <br/>
                <b>Ausstattung:</b> {props.selectedRoom?.quantity}x {props.selectedRoom?.item_name}
            </div>
            <BookingTable {...props}/>
            <BookingForm {...props}/>
        </div>
    )
}

export default lookupPage