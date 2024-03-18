import { userEmail } from "../Login/Login";
import { useNavigate } from "react-router-dom";


export let clickedUsers = []

const Home = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        if (userEmail != null) {

            clickedUsers.push(userEmail)
        }
        navigate('/adminpanel')
    }
    return (
        <div className="w-4/5 mx-auto mt-20 flex items-center justify-center">


            <button onClick={handleClick} className="btn btn-outline btn-success">Auto Poll</button>

        </div>
    );
};

export default Home;