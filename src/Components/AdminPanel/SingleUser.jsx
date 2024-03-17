
const SingleUser = ({user}) => {
    const {name,email} = user
    return (
        <div className="border-2 border-orange-500 rounded-md px-5 py-2 flex flex-col overflow-auto">
            <h1><span className="font-bold mb-2">User Name: </span> {name}</h1>
            <h1><span className="font-bold">User Email: </span>{email}</h1>
        </div>
    );
};

export default SingleUser;