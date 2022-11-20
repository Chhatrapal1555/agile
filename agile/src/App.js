import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Drawer from './component/drawer';
import MainScreen from './screens/mainScreen';

function App() {
  return (
    <div>
 <Header/>
    <Drawer/>
    {/* <TopNav/> */}
    <MainScreen/>
    </div>
   
  );
}

export default App;
