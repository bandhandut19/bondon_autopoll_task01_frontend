import AutoPoll from "../AutoPoll/AutoPoll";
import { userEmail } from "../Login/Login";

const Home = () => {
   
    return (
        <div className="w-4/5 mx-auto mt-20 flex items-center justify-center">
            <AutoPoll></AutoPoll>
            
        </div>
    );
};

export default Home;