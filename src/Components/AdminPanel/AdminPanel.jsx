import { useEffect, useState } from "react";
import { clickedUsers } from "../Home/Home";
import axios from "axios";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [allClickedUsers,setAllClickedUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        const filteredUsers = clickedUsers.map(cuser => users.filter(user => user.email === cuser));
        setAllClickedUsers(filteredUsers)
    }, [users, clickedUsers]);
    

    return (
        <div className="w-4/5 mx-auto mt-10 bg-orange-100 px-5 py-5">

            
            <h1>{allClickedUsers.length}</h1>


           
        </div>
    );
};

export default AdminPanel;









    /////////////////////////////


    // INSIDE 

     {/* <h1 className="text-center text-2xl font-bold mb-5">Welcome <span className="text-green-500">{currentUserData[0]?.name}</span> !</h1>
            
            <h1 className="font-bold text-2xl text-center">Total users under you are: <span className="text-green-600 text-2xl"> { currentUserData?.length == 0 ? <h1>0</h1>: users.length} </span></h1>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    currentUserData?.length == 0 ? <h1 className="text-center font-bold text-red-500 text-xl">No users under you. Please register or login</h1> :
                        users?.map(user => <SingleUser key={user._id} user={user}></SingleUser>)
                }
            </div> */}




    // current user date

    // useEffect(() => {
    //     if (currentUserData) {
    //         const filteredUser = users.filter(user => user.email === userEmail);
    //         setUserDate(filteredUser[0]?.date)
    //     }
    // }, [userEmail, users,currentUserData]);
    
    
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/users/${userDate}`)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, [currentUserData]);