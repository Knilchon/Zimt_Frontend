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


/*
    # Fake API Response
    # Insert me as return value and comment out original response
    # or in general implement repo injection with mock api

    return new Promise((resolve) => {
        resolve(
            {
                first: [{
                    id: 2323,
                    room: 12,
                    floor: 1,
                    building_section: 2,
                    subroom_description: "lorem ipsum",
                    seats: 999,
                    item_decription: "penis",
                    item_name: "phallus",
                    quantity: 100
                }],
                second: [{
                    id: 2323,
                    room: 12,
                    floor: 2,
                    building_section: 2,
                    subroom_description: "lorem ipsum",
                    seats: 999,
                    item_decription: "penis",
                    item_name: "phallus",
                    quantity: 100
                }],    
        
        }
    )
*/

export default getRooms