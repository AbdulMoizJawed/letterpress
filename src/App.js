
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import TitlePage from './Components/TitlePage/TitlePage'
import ExclusiveNews from './Components/ExclusiveNews/ExclusiveNews'
import HotTopics from './Components/HotTopics/HotTopics';


function App() {
  return (
    <div className="App">
       <Navbar />
        <TitlePage />
        <ExclusiveNews />
        <HotTopics />
    </div>
  );
}

export default App;
