export type BasicRoomDetails = {
    id: number
    room: number
    floor: number
    building_section: number
    subroom_description: string
    seats: number
    item_decription: string
    item_name: string
    quantity: number
}

export type WhouleData = {
    first: BasicRoomDetails[],
    second: BasicRoomDetails[],
}

const getRooms = async (): Promise<any> => {
    const url = `http://10.3.141.1:8000/rooms`

    const request =
    {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    }


    const response: Response = await fetch(url,request)
    const json: Promise<any>  = await response.json()
    const data = await json
    return data[0]
}
export default getRooms