import { Dispatch, SetStateAction } from "react"
import { BasicRoomDetails } from "../functions/fetchRooms"
import MapSvg from "./MapSvg"
import MapSvg_2 from "./MapSvg_2"
import MapSvg_3 from "./MapSvg_3"

interface ICurrentMapProps {
    selectedLevel: number | undefined
    setSelectedRoom: Dispatch<SetStateAction<BasicRoomDetails | undefined>>
    roomArray: BasicRoomDetails[]
    selectedRoom: BasicRoomDetails | undefined
}

const CurrentMap = (props: ICurrentMapProps) => {

    const Map = (props2: {level:number| undefined}) => {
        switch(props2.level){
            case(2):
            return (<MapSvg_2 {...props}/>)
            case(3):
            return (<MapSvg_3 {...props}/>)
            default:
                return (<MapSvg {...props}/>)
        }
    
    }
    return <Map level={props.selectedLevel}/>
}
export default CurrentMap