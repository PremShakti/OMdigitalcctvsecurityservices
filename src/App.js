import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="Appp">
    <Navbar/>
    <AllRoutes/>
    {/* <Box w={'100%'}h={'5000px'} border={'1px solid red'} ></Box> */}
    </div>
  );
}

export default App;
