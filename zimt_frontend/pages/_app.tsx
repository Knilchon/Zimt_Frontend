import type { AppProps } from 'next/app'
import getRooms from '../functions/fetchRooms'
import getLevels from '../functions/fetchLevels'
import { useEffect, useState } from 'react'
import { BasicRoomDetails } from '../functions/fetchRooms'
import { BasicLevelDetails } from '../functions/fetchLevels'
import { PostRquest } from '../functions/PostRoomBooking'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'
import LookupPage from '../components/lookupPage'

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
  const [levelArray,setLevelArray] = useState<BasicLevelDetails[]>([])

  useEffect(() => {
    const levelTemp = async () => await getLevels()
    levelTemp().then(data => {
      setLevelArray(data)
      console.log(levelArray)
    })
  }, [])

  useEffect(() => {
    const roomTemp = async () => await getRooms(level)
    roomTemp().then(data => setRoomArray(data))
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
        <h1>Raumplan App</h1>
        <Searchbar className='search-bar'/>
      </header>
      <div className='map-and-sidebar'>
      <Sidebar className='sidebar'>
          {/*
            levelArray.map(level => {
              return <>
                <button onClick={_ => handelLevelChange(level.level)}>Etage {level.level}</button>
                {level.rooms.map(room => {
                  test.roomNr = room
                  return <button className={'room-button'} onClick={_ => handelRoomSelect(test)}>Raum {test.roomNr}</button> 
                })}
                <br />
              </>
            })
          */}
          Sidebar.
        </Sidebar>
        <div className='map-body'>
          <LookupPage>
            
          </LookupPage>
        </div>
      </div>
    </>
  )
}


