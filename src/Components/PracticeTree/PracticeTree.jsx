import { FaArrowDownLong } from "react-icons/fa6";
const PracticeTree = () => {

    const users = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
    }
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center justify-center mt-10">
            <div>

                <ul>
                    <li className="rounded-3xl bg-red-300 px-5 text-center py-3 mb-8">{users.a}</li>
                    <div className="grid grid-cols-3 gap-5">

                        <div>
                            <div className="fixed text-red-500 text-3xl -mt-6 ml-2 rotate-12">
                                <FaArrowDownLong />
                            </div>
                            <li className="rounded-3xl bg-green-300 px-5 py-3 mb-2">{users.b}</li>
                        </div>

                        <div>
                            <div className="fixed text-red-500 text-3xl -mt-6 ml-2 rotate-20">
                                <FaArrowDownLong />
                            </div>
                            <li className="rounded-3xl bg-green-300 px-5 py-3 mb-2">{users.c}</li>
                        </div>

                        <div>
                            <div className="fixed text-red-500 text-3xl -mt-6 ml-2 -rotate-12">
                                <FaArrowDownLong />
                            </div>
                            <li className="rounded-3xl bg-green-300 px-5 py-3 mb-2">{users.d}</li>
                        </div>
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default PracticeTree;