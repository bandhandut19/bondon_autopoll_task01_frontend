import { useContext } from "react";
import { AuthContext } from "../Providers/UseridProvider";

const Tree = ({ tree }) => {
    console.log(tree)
    const { clickedUsers } = useContext(AuthContext)
    console.log(clickedUsers)
    // const left = children[0]?.leftChild?.userId;
    // const middle = children[1]?.middleChild?.userId;
    // const right = children[2]?.rightChild?.userId;

    // const children =[left,middle,right]


    const childrens = []
    for (const users of clickedUsers) {
        if (users.userId == tree) {
            if (users.children[0]?.leftChild?.userId != null) {
                console.log(users.children[0]?.leftChild?.userId)
                childrens.push(users.children[0]?.leftChild?.userId)
                
            }
            if (users.children[1]?.middleChild?.userId != null) {
                console.log(users.children[1]?.middleChild?.userId)
                childrens.push(users.children[1]?.middleChild?.userId)
            }
            if (users.children[2]?.rightChild?.userId != null) {
                console.log(users.children[2]?.rightChild?.userId)
                childrens.push(users.children[2]?.rightChild?.userId)
            }


        }
    }




    const getChildrens = (user) => {

        for (const users of clickedUsers) {
            if (users.userId == user) {
                if (users.children[0]?.leftChild?.userId != null) {
                    // console.log(users.children[0]?.leftChild?.userId)
                    return users.children[0]?.leftChild?.userId
                }
                else if (users.children[1]?.middleChild?.userId != null) {
                    // console.log(users.children[1]?.middleChild?.userId)
                    return users.children[1]?.middleChild?.userId
                }
                else if (users.children[2]?.rightChild?.userId != null) {
                    // console.log(users.children[2]?.rightChild?.userId)
                    return users.children[2]?.rightChild?.userId
                }


            }
        }

    }




    return (

        <div className="">
            <ul className="">

                <li>{tree}</li>
                <ul>
                    <li> {childrens != null ? childrens[0] : ''}</li>
                    <li>{childrens[0] == null ? '' : getChildrens(childrens[0])}</li>
                </ul>
                <ul>
                    <li> {childrens != null ? childrens[1] : ''}</li>
                    <li>{childrens[1] == null ? '' : getChildrens(childrens[1])}</li>
                </ul>
                <ul>
                    <li> {childrens != null ? childrens[2] : ''}</li>
                    <li>{childrens[2] == null ? '' : getChildrens(childrens[2])}</li>
                </ul>


                {/* <li>{userId}</li>
                {
                    left!=null? <li>{left}</li> : ''
                }
                {
                    middle!=null? <li>{middle}</li> : ''
                }
                {
                    right!=null? <li>{right}</li> : ''
                } */}
            </ul>
        </div>
    );
};

export default Tree;