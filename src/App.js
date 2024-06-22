
import './App.css';
import Header from './componets/header/Header';
import Footer from './componets/footer/Footer';
function App(){
  return(
      <div>
      <div className='content'>
        {<Header/>}
      </div>

      <div >
        {<Footer/>}
      </div>
      </div>

      
  )
}

export default App;
