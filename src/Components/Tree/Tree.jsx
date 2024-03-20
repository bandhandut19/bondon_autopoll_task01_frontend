import { useContext, useState } from "react";
import { AuthContext } from "../Providers/UseridProvider";
import PropTypes from 'prop-types';
const Tree = ({ tree }) => {
    const { clickedUsers, users } = useContext(AuthContext);
    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [user,setUser] = useState(null)
    const handleUserClick = (user) => {
        const userDetails = users.find(user1 => user1.id === user);
        const { email, name } = userDetails
        setEmail(email)
        setName(name)
        setUser(user)
        document.getElementById('my_modal_5').showModal();
    }


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
            <ul className="grid grid-cols-3 gap-x-1 w-full ">
                {children.map((child, index) => (
                    <div className="py-2 gap-x-1 flex flex-col " key={index}>
                        <div onClick={() => handleUserClick(child)} className="px-1 py-2 bg-white rounded-lg text-xs  overflow-x-auto cursor-pointer">
                            <h1 className=" text-center">{child}</h1>
                        </div>

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-orange-400 text-slate-700">
                                <h3 className="font-bold text-2xl">Informations of {user}</h3>
                                <ul className="text-left flex flex-col items-left  mt-5">
                                <li className="py-2"><span className="font-bold">User Name: </span> {name}</li>
                                <li className="py-2"><span className="font-bold">User Name: </span> {email}</li>

                                </ul>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        {renderChildren(child)}
                    </div>
                ))}
            </ul>
        );
    };

    return (
        <div className="px-5">
            <ul className="flex flex-col items-center justify-center">
                <li className="bg-slate-400 px-3 py-2 rounded-md mb-2 cursor-pointer">{tree}</li>
                <ul className="flex w-full gap-2 ">
                    {/* {grid} */}
                    {getChildren(tree).map((child, index) => (
                        <li className="bg-slate-300 px-2 py-3 rounded-lg w-full" key={index}>
                            <div onClick={() => handleUserClick(child)} className="p-1 bg-white text-xs rounded-lg cursor-pointer">
                                <h1 className=" text-center">{child}</h1>
                            </div>
                            {renderChildren(child)}
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
};

Tree.propTypes = {
    tree: PropTypes.string
};

export default Tree;
