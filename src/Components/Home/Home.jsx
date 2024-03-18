import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";

export let clickedUsers = null;

const Home = () => {
    const{userId,setClickedUsers,setPostedClicks} = useContext(AuthContext)
    
    const handleAutoPoll = ()=>{
       
    }
    return (
        <div className="w-4/5 mx-auto mt-20 flex items-center justify-center">
            {
                userId ?
                    <Link to='/'>
                        <button onClick={handleAutoPoll} className="btn btn-outline btn-success">Auto Poll</button>
                    </Link> : "To view the auto poll option you need to Login / Register"
            }
        </div>
    );
};

export default Home;
