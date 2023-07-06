import { Dispatch, SetStateAction } from "react"
import postRoomBooking, { Booking } from "../functions/PostRoomBooking"
import { BasicRoomDetails } from "../functions/fetchRooms"
import getRoomDetails from "../functions/fetchRoomDetails"

interface IBookingFormProps {
    selectedRoom: BasicRoomDetails | undefined
    postRequest: Booking,
    setPostRequest: Dispatch<SetStateAction<Booking>>,
    setSelectedRoomBookings: Dispatch<SetStateAction<Booking[] | undefined>>
}

const BookingForm = (props: IBookingFormProps) => {
    return (
        <div>
            <p>Create a booking: </p>
            <div>
                <input placeholder="Start time" value={props.postRequest.start} 
                onChange={(e) => props.setPostRequest({...props.postRequest, start: e.currentTarget.value})}/>
                <input placeholder="End time" value={props.postRequest.end}
                onChange={(e) => props.setPostRequest({...props.postRequest, end: e.currentTarget.value})}/>
            </div>
            <div>
                <input placeholder="Teacher name" value={props.postRequest.user}
                onChange={(e) => props.setPostRequest({...props.postRequest, user: e.currentTarget.value})}/>
                <input placeholder="Class" value={props.postRequest.groupe}
                onChange={(e) => props.setPostRequest({...props.postRequest, groupe: e.currentTarget.value})}/>
            </div>
            <button onClick={()=> {
            props.selectedRoom && postRoomBooking(props.selectedRoom.id,props.postRequest); 
            props.selectedRoom?.id && getRoomDetails(props.selectedRoom.id).then(data => {props.setSelectedRoomBookings(data)})}}>Submit</button>
        </div>
    )
}
export default BookingForm