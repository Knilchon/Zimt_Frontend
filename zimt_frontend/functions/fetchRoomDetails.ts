import { PostRquest } from "./PostRoomBooking"

const getRoomDetails = async (id: number | undefined) => {

    if(id === undefined)
    {return;}
    const url = `http://10.3.141.1:8000/room/${id}`

    const request =
    {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    }

    const response: Response = await fetch(url,request)
    const data: PostRquest = await response.json()
    console.log(data)

    return data
}
export default getRoomDetails