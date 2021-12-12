
import './App.css';
import {useState} from 'react';
//React ın altında useState adında bir hook bulunmaktadır.
function App() {
  const [name,setName] = useState('Ayse') // name in ismini degisterecek olan setName dir. İlk deger ataması olarak Ayse ismini verdik.
  const [ age, setAge] = useState(26)
  const [friends ,setFriends]= useState(['İkra','Abdullah'])
  const [address,setAddress] = useState({title:'Istanbul',zip:2324})
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick ={()=> setName("Ali")}>Change Name </button>
      <button onClick={()=>setAge(27)}>Change Age</button>
      <hr/>
      <h2>Friends</h2>

      {
        //bir listeleme işlemi yapıyorsak return ettigimiz en dıstaki etikete key vermemiz gerekiyor.
        friends.map((item,index )=> 
        <div key= {index}> {item} </div>)
      }
      <button onClick={()=> setFriends([...friends,'Ayse'])}>Add Friends</button>
      <hr/>
      <br></br>
      <h2>Address</h2>
     <div>{address.title} {address.zip}</div>
     <br></br>
     {/* /**Asagıdaki yapıda sadece title güncellenir */}
     <button onClick={()=> setAddress({...address,title:'İzmir'})}>Add New Address</button>
     {/* hem zip hem title ı güncellemek istersek yapı su sekildedir.--->                        <button onClick={()=> setAddress({...address,title:'İzmir',zip:33534})}>Add New Address</button> */}
    </div>
  );
}

export default App;
