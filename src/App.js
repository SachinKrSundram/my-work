import './App.css';
import { LeftSideContainer } from './components/LeftSide';
import { Navbar } from './components/Navbar';
import { RightSideContainer } from './components/RightSide';

function App() {
  return (
    <> 
    <Navbar/>
    <div className='bodyBox'>
      <LeftSideContainer/>
      <RightSideContainer/>
    </div>
    </>
     
   
  )
}

export default App;
