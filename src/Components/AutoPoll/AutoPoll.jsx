import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import TreeStructure from "../TreeStucture/TreeStructure";

const AutoPoll = () => {
    const {clickedUsers} = useContext(AuthContext)
    return (
        <div className=" w-4/5 mx-auto mt-20 flex items-center justify-center">
            {clickedUsers?.length}
            {
                clickedUsers?.map(user=> <TreeStructure key={user._id} user={user}></TreeStructure>)
            }
        </div>
    );
};

export default AutoPoll;