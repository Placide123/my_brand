
export default function Mywork() {

    return (
        <>
            <div className="flex flex-col justify-center  h-[170vh]  md:h-[90vh] lg:h-[90vh]">
                <h1 className="p-2 flex justify-center font-bold text-2xl md:p-4 text-primary">My Current Work</h1>
                <div className="flex md:flex-row justify-center m-2 mb-4 md:mb-0 md:m-4 lg:m-10 flex-col md:gap-x-2 gap-y-2">
                    <div className=" text-justify xl:h-auto md:h-auto p-2 border-2 rounded-2xl shadow-2xl md:w-[35%] lg:w-[25%] md:mr-2 lg:mr-8">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl mb-2 mt-2 flex justify-center font-bold text-primary">Personal portifolio</h2>
                        <p className="text-justify text-base font-serif">
                        This project is focused on developing a personal portfolio to help me market myself.
                        </p>
                    </div>
                    <div className=" text-justify   md:h-auto p-2 border-2 rounded-2xl shadow-2xl md:w-[35%] lg:w-[25%] md:mr-2 lg:mr-8">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl text-sm mb-2 mt-2 flex justify-center font-bold text-primary hover:text-white">barefoot nomad</h2>
                        <p className="text-justify text-base font-serif">
                        This project is focused on developing an application that will assist in planning a trip and booking hotel accommodation
                        in a manner that is convenient.
                        </p>
                    </div>
                    <div className=" text-justify md:h-auto p-2 border-2 rounded-2xl shadow-2xl md:w-[35%] lg:w-[25%]">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl text-sm mb-2 mt-2 flex justify-center font-bold">Devpulse</h2>
                        <p className="text-justify text-base font-serif">
                        This project is focused on managing 
                        employees or trainees in a business 
                        or institution so that the employer 
                        may assess how their employee is doing.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
