import getRooms from '../functions/fetchRooms'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { PostRquest } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'
import LookupPage from '../components/lookupPage'
import getRoomDetails from '../functions/fetchRoomDetails'
import CurrentMap from '../components/CurrentMap'


const InitalPostRequest: PostRquest = {
  startTime: "",
  endTime: "",
  teacher: "",
  group: ""
}

export default function App() {

  const [roomArray, setRoomArray] = useState<BasicRoomDetails[]>([])
  const [selectedLevel, setSelectedLevel] = useState<number|undefined>(undefined)
  const [selectedRoom, setSelectedRoom] = useState<BasicRoomDetails | undefined>(undefined)
  const [postRequest, setPostRequest] = useState<PostRquest>(InitalPostRequest)
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    const temp = async () => await getRooms()
    temp().then(data => setRoomArray([...data.first,...data.second]))
  }, [selectedLevel])

  useEffect(() => {
    getRoomDetails(selectedRoom?.id)
  }, [selectedRoom, setSelectedRoom])


  const handelLevelChange = (level: number) => {
    setSelectedLevel(level)
  }

  const handelRequestChange = (newRequest: object) => {
    setPostRequest({ ...postRequest, ...newRequest })
  }

  const handelRoomSelect = (room: BasicRoomDetails | undefined) => {
    setSelectedRoom(room)
  }

  return (
    <>
      <header className='App-header'>
        <div className='logo'/>
        <h1>Room Reserver</h1>
        <Searchbar className='search-bar'
          inputText={inputText}
          setInputText={setInputText}
          placeholder='Enter room number...'
        />
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='sidebar'
          selectedLevel={selectedLevel}
          handelLevelChange={handelLevelChange}
          handleOnClick={handelRoomSelect}
          rooms={roomArray}
          selectedRoom={selectedRoom}
          inputSearch={inputText}
        />
        <div className='map-body'>
          <CurrentMap roomArray={roomArray} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedLevel={selectedLevel} />
          {selectedRoom ? (<LookupPage selectedRoom={selectedRoom} className='lookup-page'/>):(<></>) }
          
        </div>
      </div>
    </>
  )
}


