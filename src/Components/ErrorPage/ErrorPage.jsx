import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card lg:card-side mt-14 ">
            <figure><img src="https://i.ibb.co/9Tw83BY/000-404.png" alt="Album" /></figure>
            <div className="card-body flex items-center  md:mt-40 mt-4 text-center">
                <h2 className="card-title font-bold text-6xl text-red-600">404</h2>
                <p className="md:text-5xl text-3xl font-bold mt-5">Page Not Found</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <button className="btn bg-amber-600 text-black md:mt-0 mt-8">Go back to Home</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;