import { useEffect, useState } from 'react';

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('http://localhose:4000/api/workouts');
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }
    }, []);
    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home;