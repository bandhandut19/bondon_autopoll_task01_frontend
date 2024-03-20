import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";

const Tree = ({ tree }) => {
    const { clickedUsers } = useContext(AuthContext);

    const getAllDescendants = (userId) => {
        let descendants = [];
        for (const user of clickedUsers) {
            if (user.userId === userId) {
                for (const child of user.children) {
                    const childId = child?.leftChild?.userId || child?.middleChild?.userId || child?.rightChild?.userId;
                    if (childId) {
                        descendants.push(childId);
                        descendants = descendants.concat(getAllDescendants(childId));
                    }
                }
            }
        }
        return descendants;
    };

    const descendants = getAllDescendants(tree);

    return (
        <div className="">
            <ul className="">
                <li className="bg-slate-400 px-2 py-1 rounded-lg mb-2 text-center">{tree}</li>
                <ul className="grid grid-cols-3 gap-2 text-center items-center justify-center">
                    {descendants.map((descendant, index) => (
                        <li className="bg-slate-400 px-2 py-1 rounded-lg" key={index}>{descendant}</li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

export default Tree;
