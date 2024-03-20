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
                <li className="">{tree}</li>
                <ul>
                    {descendants.map((descendant, index) => (
                        <li key={index}>{descendant}</li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

export default Tree;
