import getDomain from "./getDomain"

export type BasicLevelDetails = {
    id: number
    level: number
    rooms: Array<number>
}

const getLevels = async (): Promise<BasicLevelDetails[]> => {
    const url = `${getDomain()}/levels`
    const test = "" //TODO: add mock backend url

    const response: any = [{ // TODO: demand type "Response"
        "id": 1,
        "level": 1,
        "rooms": [1.0, 1.1, 1.2]
    },
    { // TODO: demand type "Response"
        "id": 2,
        "level": 2,
        "rooms": [2.0, 2.1, 2.2]
    }
] // TODO: fetch url
    // const json: Promise<BasicLevelDetails[]> = await response.json()
    const data = response

    return data
}
export default getLevels