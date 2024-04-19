// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    // v below is a react fragment 
    // can also write this React.fragment
    // react fragments render more than one top level component
    // normally you aren't allowed more than one parent component
    <> 
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </> // <-- this is a react fragment, 
  );
}

export default App;
