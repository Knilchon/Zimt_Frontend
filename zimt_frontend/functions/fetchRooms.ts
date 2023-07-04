import getDomain from "./getDomain"

export type BasicRoomDetails = {
    id: number
    roomNr: number
    level: number
    section: number
    prefix: string
    seats: number
}


const getRooms = async (level: number): Promise<BasicRoomDetails[]> => {
    const url = `${getDomain()}/rooms/${level}`
    const test = "https://mocki.io/v1/091ee301-bfe2-4dc6-9db7-706ff9c78a65"

    const response: Response = await fetch(test)
    const json: Promise<BasicRoomDetails[]>  = await response.json()
    const data = await json

    return data
}
export default getRooms