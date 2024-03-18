import axios from "axios";
import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { userEmail } from "../Login/Login";
const AdminPanel = () => {
    const [users, setUsers] = useState([]); /* all users */
    const [userDate, setUserDate] = useState([]); /* current user date */
    const [currentUserData, setCurrentUserData] = useState([]); /*  this one holds current user */

    // current user data //
    useEffect(() => {
        if (userEmail) {
            const filteredUser = users.filter(user => user.email === userEmail);
            setCurrentUserData(filteredUser);
        }
    }, [userEmail, users]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    /////////////////////////////

    // current user date
    
    useEffect(() => {
        if (currentUserData) {
            const filteredUser = users.filter(user => user.email === userEmail);
            setUserDate(filteredUser[0]?.date)
        }
    }, [userEmail, users,currentUserData]);
    








    return (
        <div className="w-4/5 mx-auto mt-10 bg-orange-100 px-5 py-5">

            <h1 className="text-center text-2xl font-bold mb-5">Welcome <span className="text-green-500">{currentUserData[0]?.name}</span> !</h1>
            
            <h1 className="font-bold text-2xl text-center">Total users under you are: <span className="text-green-600 text-2xl"> { currentUserData?.length == 0 ? <h1>0</h1>: users.length} </span></h1>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    currentUserData?.length == 0 ? <h1 className="text-center font-bold text-red-500 text-xl">No users under you. Please register or login</h1> :
                        users?.map(user => <SingleUser key={user._id} user={user}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default AdminPanel;