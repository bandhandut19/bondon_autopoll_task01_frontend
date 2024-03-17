import { Link ,useNavigate} from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userInfo = {
            name,
            email,
            hashedPassword
        }
        console.log(userInfo)

        axios.post('http://localhost:5000/users',userInfo)
            .then(res =>{
                console.log(res.data)
            })
            .catch(error =>{
                console.error(error)
            })
            
        navigate('/login')

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