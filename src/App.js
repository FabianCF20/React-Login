import logo from './logo.svg';
import './App.css';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
function App() {
  return (
    <div className="App">
        <form action="">
          <h1>Login</h1>
            <div className = "input-box">
              <input type ="text" placeholder ="username" required/> 
              <FaUser className='icons'/>
            </div>
            <div className = "input-box">
            <input type ="password" placeholder ="password" required/>
            <RiLockPasswordFill className='icons'/>
            </div>
            <button type="submi">Login</button>
            <div className='register-link'>
              <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  );
}

export default App;
