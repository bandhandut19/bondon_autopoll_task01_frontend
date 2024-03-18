import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios'
import bcrypt from "bcryptjs";


export let userEmail = null;
const Login = () => {
    
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const comaprePasswords = async (password, hashedPass) => {
        try {
            const match = await bcrypt.compare(password, hashedPass);
            return match;
        } catch (error) {
            console.error('Error comparing passwords:', error);
            return false; 
        }
    };
    
   
    const handleLogin = async(e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const vaildateEmail = users?.some(user => user?.email === email)
    
    
    if(vaildateEmail){
        // console.log("Email found")
        
        const validatePasswords= async(users, password)=> {
            const validatePassPromises = users.map(async user => {
                return await comaprePasswords(password, user.hashedPassword);
            });
        
            const validatePassArray = await Promise.all(validatePassPromises);
        
            return validatePassArray.some(result => result === true);
        }
    
        validatePasswords(users, password)
        .then(result => {
            if(result == true){
                userEmail = email
                navigate('/')
            }
        })
        .catch(error => {
            console.error('Error validating passwords:', error);
        });

    }
    else{
        console.log("Email not found")
    }
   
}
return (
    <div className="w-4/5 mx-auto mt-5">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 mb-5 text-slate-600">Login now!</h1>

            </div>
            <div className="w-full lg:p-10 shadow-2xl bg-slate-300">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />

                    </div>
                    <h1>Do not have an account ? <span><Link to='/register' className="text-green-600">Register Now</Link></span></h1>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-400 border-none hover:bg-green-600 hover:text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default Login;