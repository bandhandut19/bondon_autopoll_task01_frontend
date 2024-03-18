import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";

const AutoPoll = () => {
    const {clickedUsers} = useContext(AuthContext)
    return (
        <div className=" w-4/5 mx-auto mt-20 flex items-center justify-center">
            {clickedUsers?.length}
        </div>
    );
};

export default AutoPoll;