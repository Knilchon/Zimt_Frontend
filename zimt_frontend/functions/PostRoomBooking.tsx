
export type Booking = {
    startTime: string,
    endTime: string,
    teacher: string,
    group: string
  }

const postRoomBooking = async (id: number, req: Booking) => {
    const url = `/room/${id}`
    const test = "https://mocki.io/v1/091ee301-bfe2-4dc6-9db7-706ff9c78a65"

    const request =
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }

    const response: Response = await fetch(test,request)
    const data = await response.json()

    return data
}
export default postRoomBooking