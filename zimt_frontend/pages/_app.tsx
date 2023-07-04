import type { AppProps } from 'next/app'
import '../styles/_app.css'
import Sidebar from '../components/sidebar'

export default function App() {
  return (
    <>
      <header className='App-header'>
        <p>Das ist ein Header.</p>
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
