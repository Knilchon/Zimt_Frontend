
export type Booking = {
    start: string,
    end: string,
    user: string,
    groupe: string
  }

const postRoomBooking = async (id: number, req: Booking) => {
    const url = `http://10.3.141.1:8000/booking/${id}`

    const request =
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(req)
    }
    console.log(request)
    const response: Response = await fetch(url,request)
    const data = await response
    console.log(data)
}
export default postRoomBooking