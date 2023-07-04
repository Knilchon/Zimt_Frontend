import type { AppProps } from 'next/app'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'
import Searchbar from '../components/searchbar'

export default function App() {
  return (
    <>
      <header className='App-header'>
        Das ist ein Header.
        <Searchbar className='search-bar' searchBarTextClassName='search-bar-text'/>
      </header>
      <div className='map-and-sidebar'>
        <Sidebar className='side-bar'/>
        <div className='map-body'>
          <p>Das ist die große Oberfläche neben der Sidebar.</p>
        </div>
      </div>
    </>
  )
}
