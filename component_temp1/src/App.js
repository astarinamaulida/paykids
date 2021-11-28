import './App.css';
import Navigation from './components/Navigation'
import Frame from './components/Frame'

import TinaPicksCard from './views/TinaPicksCard'
import JaneSendMoney from './views/JaneSendMoney'
import TinaDashboard from './views/TinaDashboard'
import TinaRequestMoney from './views/TinaRequestMoney'
import JaneDashboard from './views/JaneDashboard';

function App() {
  return (
    <body>
    <div className="wrapper">
      <Navigation />
      <Frame />
      <TinaPicksCard />
      <TinaDashboard />
      <JaneSendMoney />
      <JaneDashboard />
      <TinaRequestMoney />
    </div>
    </body>
  );
}

export default App;
