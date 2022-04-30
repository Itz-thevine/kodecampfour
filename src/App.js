import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './Component/Card';



function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      (res) => {
        setProfile(res.data);
      }
    )
  },[])

  // console.log(profile)

  return (
    <div className="App">
      {
        profile.map((pro, i) =>(
          <Card key={i} name={pro.name} desc={pro.company.catchPhrase} address={pro.address.street} mail ={pro.email} phone={pro.phone} username={pro.username}/>
        ))

      }


    </div>
  );

}

export default App;
