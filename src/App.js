import './App.css';
import { useState } from 'react';
import Users from './componants/Users'

function App() {

  const [users,changeUsers] = useState([]);
  const [isLoaded,chengeStatus] = useState(false)

  let loadUsers = async() => {
    chengeStatus(true)

    //load the data
    try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const json = await response.json();
        console.log(json.data)
        changeUsers(json.data)
		} catch (error) {
        console.log("error", error);
		}
};
  
  return (
    <>
    <nav className='navbar'>
      <img id="logo" src='/logo.jpg' alt="not available"/>
      <button className='btnPrimary' onClick={() => loadUsers()}>Get Users</button>
    </nav>
    <div className='container'>

      {/* Show Users */}
    <Users users={users} loaded = {isLoaded}/>
    </div>
    </>
  )
}

export default App;
