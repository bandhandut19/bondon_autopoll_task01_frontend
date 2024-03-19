import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import axios from "axios";
export let clickedUsers = null;

const Home = () => {
    const { userId, clickedUsers, setPostedClicks } = useContext(AuthContext)

    const handleAutoPoll = async () => {

        const isUserIncluded = clickedUsers.some(user => Object.values(user).includes(userId));

        if ((!isUserIncluded) || clickedUsers == null) {
            axios.post('http://localhost:5000/clickedusers',
                {
                    userId: userId,
                    children:[{leftChild: null} ,
                    {middleChild:  null},
                    {rightChild:  null}
                    ]
                })
                
                .then(res => {
                    console.log(res.data)
                    setPostedClicks(res.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
        else {
            console.log("user already exists in poll")
            // axios.post('http://localhost:5000/clickedusers',{userId}) 

        }
        

    }
    return (
        <div className="w-4/5 mx-auto mt-20 flex items-center justify-center">
            {
                userId ?
                    <Link to='/autopoll'>
                        <button onClick={handleAutoPoll} className="btn btn-outline btn-success">Auto Poll</button>
                    </Link> : "To view the auto poll option you need to Login / Register"
            }
        </div>
    );
};

export default Home;
