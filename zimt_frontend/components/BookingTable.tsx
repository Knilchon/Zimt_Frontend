import { Booking } from "../functions/PostRoomBooking"

interface IBookingTableProps {
    selectedRoomBookings: Booking[]| undefined
}

const BookingTable = (props: IBookingTableProps) => {
    return (
        <div>
            <p>Bookings:</p>
            {props.selectedRoomBookings && props.selectedRoomBookings?.length > 0 ? props.selectedRoomBookings.map((booking, index) => {
                return (
                    <p style={{margin: "0px"}} key={index}>startTime: {booking.start} endtime: {booking.end} teacher: {booking.teacher} group: {booking.group_name}</p>
                )
            }):(<p>No current bookings</p>)}
        </div>
    )
}
export default BookingTable