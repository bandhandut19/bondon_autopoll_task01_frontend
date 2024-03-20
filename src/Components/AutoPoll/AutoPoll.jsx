import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import Tree from "../Tree/Tree";

const AutoPoll = () => {
    const {userId} = useContext(AuthContext)


    return (
        <div className=" w-full mt-10">
            {/* {clickedUsers?.length} */}

            <Tree key={userId} tree={userId}></Tree>
            
        </div>
    );
};

// console.log(leftChild, middleChild, rightChild)
    // console.log(user?.children[0]?.leftChild?.userId)
export default AutoPoll;