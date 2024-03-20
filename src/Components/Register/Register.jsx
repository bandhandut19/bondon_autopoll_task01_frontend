import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState('')
   const {users,setPosted} =useContext(AuthContext)

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const date = new Date()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const isValidEmail = !users.some(user => email === user.email)
        
        
        if (isValidEmail) {
            const userId = `user_${users.length + 1}`;
            const userInfo = {
                id: userId,
                name,
                email,
                hashedPassword,
                date
            }
            axios.post('http://localhost:5000/users', userInfo)
                .then(res => {
                    setPosted(res.data)
                })
                .catch(error => {
                    console.error(error)
                })
                toast("Registration Successful", {
                    position: "top-center",
                    autoClose: 1000, // Close after 1 second
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            navigate('/login')
        }
        else {
            toast("Email already exists.Please use a different email", {
                position: "top-center",
                autoClose: 1000, // Close after 1 second
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setEmailError("Email already exists.Please use a different email")
        }

    }
    return (
        <div className="w-4/5 mx-auto mt-5">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 mb-5 text-slate-600">Register now!</h1>

                </div>
                <div className="w-full lg:p-10 shadow-2xl bg-slate-300">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
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
                        <h1>Already have an account ? <span><Link to='/login' className="text-green-600">Login Now</Link></span></h1>
                        <h1 className="text-red-500">{emailError}</h1>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-400 border-none hover:bg-green-600 hover:text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;