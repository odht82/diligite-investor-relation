import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Recents from './Components/Recent/Recents';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Recents></Recents>
      <Footer></Footer>
    </div>
  );
}

export default App;
