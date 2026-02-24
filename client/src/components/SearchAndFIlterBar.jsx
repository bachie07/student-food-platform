
const SearchAndFilterBar = ({query}) => {

    return (

        <div className="max-w-7xl mx-auto">

        <div className="flex flex-col justify-center items-center mt-10">
            
            <h3 className="text-bold font-serif text-[20px] text-gray-700"> Search results for </h3>

            <h1 className="font-bold font-serif text-[50px] text-black"> {query} </h1>
            
        </div>

        <hr className="w-full bg-black mt-10"/>

        <h1 className="text-bold font-serif text-[15px] text-gray-700 mt-5"> Filter Results</h1>

        <div className="grid grid-cols-3">

            <div className="block rounded-lg"></div>

            <div></div>

            <div></div>


        </div>


        </div>



    )

}


export default SearchAndFilterBar;