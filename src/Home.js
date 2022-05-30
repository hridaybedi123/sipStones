//import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Jumbo from './Jumbo';
import Jumbo2 from './Jumbo2';
import Divider from './Divider';
function Home() {
  return (
    <div className="Home">
      <Navi/>
      <Jumbo/>
      <Divider/>
      <Jumbo2/>
    </div>
  );
}

export default Home;
