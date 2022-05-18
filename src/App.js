import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer from './components/Answer';
import Mobile from './components/Mobile';
import Mobile1 from './components/Mobile1';


function App() {

  // let info=[
  //   {name:"aman",from:"india"},
  //   {name:"suman",from:"usa"},
  //   {name:"ramesh",from:"dubai"},
  //   {name:"suresh",from:"canada"},
  //   {name:"boka",from:"dhaka"},
  //   {name:"abdul",from:"pak"},
  // ];
  return (
    <div className="App">
     
       <Hello></Hello>
      < Answer />
      <Mobile/>
      <Mobile1/>
      
      
    </div>
  );
}

export default App;
