import axios from "axios";
import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
                console.log(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div className="w-4/5 mx-auto mt-10 bg-orange-100 px-5 py-5">
            
                <h1 className="font-bold text-2xl">Total users under you are: <span className="text-green-600 text-2xl"> {users.length} </span></h1> 
            <div className="grid grid-cols-3 gap-5 mt-5">

            {
                users?.map(user => <SingleUser key={user._id} user={user}></SingleUser>)
            }
            </div>
        </div>
    );
};

export default AdminPanel;