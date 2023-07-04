import type { AppProps } from 'next/app'
import getRooms from '../functions/fetchRooms'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { PostRquest } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'

const InitalPostRequest: PostRquest = {
  startTime: "",
  endTime: "",
  teacher: "",
  group: ""
}

export default function App() {

  const [roomArray,setRoomArray] = useState<BasicRoomDetails[]>([])
  const [level,setLevel] = useState<number>(1)
  const [selectedRoom,setSelectedRoom] = useState<BasicRoomDetails | undefined>(undefined)
  const [postRequest,setPostRequest] = useState<PostRquest>(InitalPostRequest)

  useEffect(() => {
    const temp = async () => await getRooms(level)
    temp().then(data => setRoomArray(data))
  },[level])

  const handelLevelChange = (level: number) => {
    setLevel(level)
  }

  const handelRequestChange = (newRequest: object) => {
    setPostRequest({...postRequest, ...newRequest})
  }

  const handelRoomSelect = (room : BasicRoomDetails) => {
    setSelectedRoom(room)
  }

  return (
    <>
      <header className='App-header'>
        <h1>[Insert App name]</h1>
        <Searchbar className='search-bar'/>
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='side-bar' handleOnClick={() => {}} room={{}} />
        <div className='map-body'>
          Put map here.
        </div>
      </div>
    </>
  )
}
