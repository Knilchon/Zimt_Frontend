import type { AppProps } from 'next/app'
import '../styles/_app.css'

export default function App() {
  return (
    <>
      <header className='App-header'>
        <p>Das ist ein Header.</p>
      </header>
      <div className='map-and-sidebar'>
        <div className='side-bar'>
          <p>Das ist eine Sidebar.</p>
        </div>
        <div className='map-body'>
          <p>Das ist die große Oberfläche neben der Sidebar.</p>
        </div>
      </div>
    </>
  )
}
