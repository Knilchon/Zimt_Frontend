const getRoomId = async (name: string) => {

    const url = `http://10.3.141.1:8000/name2idconverter`

    const request =
    {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({roomname: name})
    }

    const response: Response = await fetch(url,request)
    const data = await response.json()
    return data[0]
}
export default getRoomId