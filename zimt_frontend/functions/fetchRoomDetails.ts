import getDomain from "./getDomain"
import { PostRquest } from "./PostRoomBooking"

const getRoomDetails = async (id: number) => {
    const url = `${getDomain()}/room/${id}`
    const test = "https://mocki.io/v1/091ee301-bfe2-4dc6-9db7-706ff9c78a65"

    const response: Response = await fetch(test)
    const data: PostRquest = await response.json()

    return data
}
export default getRoomDetails