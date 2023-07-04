import type { AppProps } from 'next/app'
import getRooms from '../functions/fetchRooms'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { PostRquest } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'

const InitalPostRequest: PostRquest = {
  startTime: "",
  endTime: "",
  teacher: "",
  group: ""
}

const placeholderdata: BasicRoomDetails = {
  id: 1,
  seats: 30,
  level: 1,
  section: 2,
  roomNr: 12,
  prefix: "",
}
const placeholderdata2: BasicRoomDetails = {
  id: 2,
  seats: 30,
  level: 4,
  section: 3,
  roomNr: 11,
  prefix: "a",
}

export default function App() {

  const [roomArray, setRoomArray] = useState<BasicRoomDetails[]>([])
  const [level, setLevel] = useState<number>(1)
  const [selectedRoom, setSelectedRoom] = useState<BasicRoomDetails | undefined>(undefined)
  const [postRequest, setPostRequest] = useState<PostRquest>(InitalPostRequest)
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    const temp = async () => await getRooms(level)
    temp().then(data => setRoomArray([placeholderdata, placeholderdata2, placeholderdata, placeholderdata2, placeholderdata, placeholderdata2, placeholderdata, placeholderdata2, placeholderdata2, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata, placeholderdata]))
  }, [level])

  useEffect(() => {
    console.log(selectedRoom)
  }, [selectedRoom, setSelectedRoom])

  const handelLevelChange = (level: number) => {
    setLevel(level)
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
        <h1>[Insert App name]</h1>
        <Searchbar className='search-bar'
          inputText={inputText}
          setInputText={setInputText}
        />
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='side-bar'
          handleOnClick={handelRoomSelect}
          rooms={roomArray}
          selectedRoom={selectedRoom}
          inputSearch={inputText}
        />
        <div className='map-body'>
          Put map here.
        </div>
      </div>
    </>
  )
}
