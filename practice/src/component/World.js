import { useState } from "react";
import UserName from "./UserName";

export default function World({ age }){
    // let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인" : "미성년자" ; 
    // const [age, setAge] = useState(props.age);
    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name = {name}></UserName>

            {/* <button onClick={changeName}>Change</button> */}

            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike");
                // setAge(age+1);
            }}>Change</button>
        </div>
    );
}

