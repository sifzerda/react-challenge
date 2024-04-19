import './App.css';
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    // v below is a react fragment 
    // can also write this React.fragment
    // react fragments render more than one top level component
    // normally you aren't allowed more than one parent component
    <> 

<div className="bucket-app">
      <header className="header">
      <Header />

      <Navigation />
      </header>

      <main className="mx-3">
      <Outlet />
      </main>


<footer className="footer">
      <Footer />
      </footer>

    </div>



    </> // <-- this is a react fragment, 




  );
}

export default App;