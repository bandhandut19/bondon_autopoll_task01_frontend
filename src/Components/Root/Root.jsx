import {Outlet} from 'react-router-dom'
import Navbar from '../Home/Navbar';
import { ToastContainer } from 'react-toastify';
const Root = () => {
    return (
        <div>

        
            <Navbar></Navbar>
            <Outlet></Outlet>
        
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;