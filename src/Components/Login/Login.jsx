import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        const userInfo = {
            email,
            password
        }
        console.log(userInfo)
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