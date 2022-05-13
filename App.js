import React, {useState, useEffect} from "react";
import Home from"./page/Home.js"
import Submit from "./page/Sumbit.js"
import db from "./page/databas"
function App (){
const [input, setinput] = useState();
const [messager, setmessager] = useState([]);
const [username, setusername] = useState();

useEffect(() => {
setusername( prompt("enter your name otherwise you will not able to see or type message"));
}, [])

useEffect(()=>{
	db.collection('messangers')
	.orderBy('timestamp' ,'asc')
	.onSnapshot(snapshot =>{
		setmessager(snapshot.docs.map(doc =>  doc.data()  ))
	})
}, [])

useEffect(() => {
	window.scroll({
		top: 2000000000000
	});
}, [messager])

useEffect(() => {
	window.scroll({
		top: 2000000000000
	});
}, [])


	return(

<>{ 
username && 
(<div className="relative">
<h1>MESSANGER</h1>
<Home username={username} messager={messager}/>
<Submit input={input} setinput={setinput} messager={messager} setmessager={setmessager } username={username} />
</div>
)
}
	</>
   )};






 export default App

