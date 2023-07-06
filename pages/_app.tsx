import type { AppProps } from 'next/app'
import getRooms from '../functions/fetchRooms'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { PostRquest } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'
import LevelSelector from '../components/LevelSelector'
import LookupPage from '../components/lookupPage'
import getRoomDetails from '../functions/fetchRoomDetails'
import MapSvg from '../components/MapSvg'

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
    console.log(selectedLevel)
  }, [selectedLevel, setSelectedLevel])

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

  //get id room
  const handlePathClick = (id: string) => {
    console.log('Clicked path ID:', id);
  };

  return (
    <>
      <header className='App-header'>
        <h1>[Insert App name]</h1>
        <Searchbar className='search-bar'
          inputText={inputText}
          setInputText={setInputText}
        />
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='side-bar'
          selectedLevel={selectedLevel}
          handelLevelChange={handelLevelChange}
          handleOnClick={handelRoomSelect}
          rooms={roomArray}
          selectedRoom={selectedRoom}
          inputSearch={inputText}
        />
        <div className='map-body'>
          {/* Put map below */}
        <MapSvg handlePathClick={handlePathClick} />
          {/*<LevelSelector selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />*/}
          {selectedRoom ? (<LookupPage selectedRoom={selectedRoom} className='lookup-page'/>):(<></>) }
          
        </div>
      </div>
    </>
  )
}


