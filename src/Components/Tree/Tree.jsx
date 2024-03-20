import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";

const Tree = ({ tree }) => {
    const { clickedUsers } = useContext(AuthContext);

   
    const getChildren = (userId) => {
        const user = clickedUsers.find(user => user.userId === userId);
        if (!user || !user.children) return [];
        
        let children = [];
        for (const child of user.children) {
            const leftChildId = child?.leftChild?.userId;
            const middleChildId = child?.middleChild?.userId;
            const rightChildId = child?.rightChild?.userId;
            if (leftChildId) children.push(leftChildId);
            if (middleChildId) children.push(middleChildId);
            if (rightChildId) children.push(rightChildId);
        }
        return children;
    };

 
    const renderChildren = (userId) => {
        const children = getChildren(userId);
        if (children.length === 0) return null;

        return (
            <ul className="grid grid-cols-3 gap-2 ">
                {children.map((child, index) => (
                    <li className="" key={index}>
                         <button className="btn"> 
                        {child}
                        </button>
                        {renderChildren(child)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <ul className="flex flex-col items-center justify-center">
                <li className="bg-slate-400 px-3 py-2 rounded-2xl mb-2">{tree}</li>
                <ul className="grid grid-cols-3 gap-5 items-center justify-center text-center">
                    {getChildren(tree).map((child, index) => (
                        <li className="bg-slate-300 px-2 py-3 rounded-lg" key={index}>
                            <button className="btn py-1 mb-2"> 
                                {child}
                                </button>
                            {renderChildren(child)}
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

export default Tree;
