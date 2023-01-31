import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <LeftSideBar />
        <Feed />
        <RightSideBar/>
      </div>
    </div>
  );
}

export default App;
