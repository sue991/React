import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// import dummy from "../db/data.json"

function DayList() {
    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     console.log("Count change");
    // }, [count]); //count가 변경될때만 실행됨

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // }, []); //렌더링 직후 딱 한번만 실행됨

    const days = useFetch('http://localhost:3001/days');

    if(days.length === 0){
        return <span> Loading... </span>
    }

    return (
        <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
            <li></li>
        </ul>
        </>
    );
}

export default DayList;