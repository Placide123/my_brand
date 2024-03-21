
export default function Mywork() {

    return (
        <>
            <div className="flex flex-col justify-center  h-[220vh]  md:h-[230vh] lg:h-[90vh]">
                <h1 className="p-2 flex justify-center font-bold text-2xl md:p-10 text-primary">My Current Work</h1>
                <div className="flex md:flex-row m-2 md:m-10 flex-col md:gap-x-2 gap-y-1">
                    <div className=" text-justify xl:h-auto md:h-auto p-1 hover:bg-primary rounded">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl mb-2 mt-2 flex justify-center font-bold text-primary">barefoot nomad</h2>
                        <p className="text-base md:text-sm font-serif w-full md:p-2 xl:text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries.
                        </p>
                    </div>
                    <div className=" text-justify  p-1 hover:bg-primary rounded">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl text-sm mb-2 mt-2 flex justify-center font-bold text-primary hover:text-white">barefoot nomad</h2>
                        <p className="text-base md:text-sm font-serif w-full md:p-2 h-auto xl:text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries.
                        </p>
                    </div>
                    <div className=" text-justify p-1 hover:bg-primary rounded">
                        <img
                            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="a person"
                            className="h-[48%] object-cover  w-full md:h-2/5 xl:h-1/2"
                        />
                        <h2 className="md:text-2xl text-sm mb-2 mt-2 flex justify-center font-bold">barefoot nomad</h2>
                        <p className="text-base md:text-sm font-serif w-full md:p-2 xl:text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
