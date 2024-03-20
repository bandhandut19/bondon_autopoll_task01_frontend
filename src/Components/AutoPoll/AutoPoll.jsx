import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import Tree from "../Tree/Tree";

const AutoPoll = () => {
    const {clickedUsers,userId} = useContext(AuthContext)

    
    return (
        <div className=" w-4/5 mx-auto mt-20 flex flex-col gap-5 items-center justify-center">
            {/* {clickedUsers?.length} */}

            <Tree key={userId} tree={userId}></Tree>
            
        </div>
    );
};

// console.log(leftChild, middleChild, rightChild)
    // console.log(user?.children[0]?.leftChild?.userId)
export default AutoPoll;