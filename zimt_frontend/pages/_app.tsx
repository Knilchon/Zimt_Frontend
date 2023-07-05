import type { AppProps } from 'next/app';
import '../styles/_app.css';
import Sidebar from '../components/sidebar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="map-and-sidebar">
      <Sidebar className="side-bar" />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
