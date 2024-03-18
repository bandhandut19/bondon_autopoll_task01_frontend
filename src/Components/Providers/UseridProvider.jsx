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

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [posted])

    

    const authState = {
        userId,
        setUserId,
        users,
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
