import World from "./World";
// import styles from "./Hello.module.css";

// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

export default function Hello(){

    function showName() {
        console.log("Mike");
    }
    
    function showAge(age) {
        console.log(age);
    }

    function showText(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button onClick={()=>{
                showAge(11);
            }}>
            Show age
        </button>
            
        {/* <input type="text" onChange={showText} /> */}
        <input type="text" onChange={(e)=>{
            console.log(e.target.value);
        }} />
        </div>
    ); 
}