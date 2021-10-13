import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Recents from './Components/Recent/Recents';
import AtAGlance from './Components/AtAGlance/AtAGlance';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Recents></Recents>
      <AtAGlance></AtAGlance>
      <Footer></Footer>
    </div>
  );
}

export default App;
