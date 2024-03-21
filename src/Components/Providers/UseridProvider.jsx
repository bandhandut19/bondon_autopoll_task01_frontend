import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null);

const UseridProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const [userId, setUserId] = useState(null);
    const [posted,setPosted] =useState(null)

    const [clickedUsers,setClickedUsers] = useState(null);
    const [postedCliks,setPostedClicks] = useState(null)


    const localRetrive = localStorage.getItem('userId')

    if(localRetrive){
        const userId = JSON.parse(localRetrive)
        setUserId(userId)
    }

    useEffect(() => {
        axios.get('https://bondon-autopoll-task01-backend.vercel.app/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [posted])

    useEffect(() => {
        axios.get('https://bondon-autopoll-task01-backend.vercel.app/clickedusers')
            .then(res => {
                setClickedUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [postedCliks])

   

    const authState = {
        userId,
        setUserId,
        users,
        posted,
        setPosted,
        setClickedUsers,
        clickedUsers,
        setPostedClicks
     
    };



    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    );
};

UseridProvider.propTypes = {
    children: PropTypes.node
};

export default UseridProvider;
