import type { AppProps } from 'next/app'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'

export default function App() {
  return (
    <>
      <header className='App-header'>
        <h1>[Insert App name]</h1>
        <Searchbar className='search-bar'/>
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='side-bar'/>
        <div className='map-body'>
          Put map here.
        </div>
      </div>
    </>
  )
}
