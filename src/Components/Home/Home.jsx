import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../Providers/UseridProvider";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let clickedUsers = null;

const Home = () => {
    const { userId, clickedUsers, setPostedClicks } = useContext(AuthContext)

        
       
        // if(!userId){
        //     toast("Please Login or Register", {
        //         position: "top-center",
        //         autoClose: 1000, // Close after 1 second
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //     });
        // }
    
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
            toast("You are already in the Auto Poll", {
                position: "top-center",
                autoClose: 1000, // Close after 1 second
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

        }
        

    }
    return (
        <div className="w-4/5 mx-auto mt-20 flex items-center justify-center">
            {
                userId ?
                    <Link to='/autopoll'>
                        <button onClick={handleAutoPoll} className="btn btn-outline btn-success">Auto Poll</button>
                    </Link> : <span className="font-bold text-lg">To view the <span className="text-orange-500 font-bold text-xl"> Auto Poll </span>  option you need to Login / Register</span> 
            }
        </div>
    );
};

export default Home;
