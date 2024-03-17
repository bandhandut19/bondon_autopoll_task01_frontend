import { Link } from "react-router-dom";

const AutoPoll = () => {
    return (
        <div className=" w-4/5 mx-auto mt-20 flex items-center justify-center">
            <Link to='/adminpanel'>
            <button className="btn btn-outline btn-success">Auto Poll</button>
            </Link>
        </div>
    );
};

export default AutoPoll;