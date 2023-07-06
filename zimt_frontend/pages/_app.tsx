import getRooms from '../functions/fetchRooms'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { Booking } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'
import LookupPage from '../components/lookupPage'
import getRoomDetails from '../functions/fetchRoomDetails'
import CurrentMap from '../components/CurrentMap'


const InitalPostRequest: Booking = {
  start: "",
  end: "",
  user: "",
  groupe: ""
}

export default function App() {

  const [roomArray, setRoomArray] = useState<BasicRoomDetails[]>([])
  const [selectedLevel, setSelectedLevel] = useState<number | undefined>(undefined)
  const [selectedViewedLevel, setSelectedViewedLevel] = useState<number | undefined>(undefined)
  const [selectedRoom, setSelectedRoom] = useState<BasicRoomDetails | undefined>(undefined)
  const [postRequest, setPostRequest] = useState<Booking>(InitalPostRequest)
  const [inputText, setInputText] = useState("")
  const [selectedRoomBookings, setSelectedRoomBookings] = useState<Booking[] | undefined>()

  useEffect(() => {
    const temp = async () => await getRooms()
    temp().then(data => setRoomArray([...data.first, ...data.second]))
  }, [selectedLevel])

  useEffect(() => {
    selectedRoom?.id && getRoomDetails(selectedRoom.id).then(data => {
      setSelectedRoomBookings(data)
    })
    if (selectedRoom?.floor && selectedRoom?.floor !== selectedViewedLevel) { setSelectedViewedLevel(selectedRoom?.floor) }
  }, [selectedRoom, setSelectedRoom])

  const handelLevelChange = (level: number) => {
    setSelectedViewedLevel(level)
    setSelectedLevel(level)
  }

  const handelRoomSelect = (room: BasicRoomDetails | undefined) => {
    setSelectedRoom(room)
  }

  return (
    <>
      <header className='App-header'>
        <div className='logo' />
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
          <div className='map-div'>
          <CurrentMap roomArray={roomArray} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedViewedLevel={selectedViewedLevel} />
          </div>
          {selectedRoom ? (<LookupPage setSelectedRoomBookings={setSelectedRoomBookings} selectedRoom={selectedRoom} selectedRoomBookings={selectedRoomBookings} postRequest={postRequest} setPostRequest={setPostRequest}/>) : (<></>)}
          <section className="sticky">
          <div className="bubbles">
            {Array.from(Array(10).keys()).map((_,i) => {return <div key={i} className="bubble"/>})}
          </div>
          </section>
        </div>
      </div>
    </>
  )
}


