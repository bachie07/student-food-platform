import { useSearchParams } from "react-router-dom";
import SearchAndFilterBar from "../../components/SearchAndFIlterBar";


const SearchPage = () => {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || ""


    return (

        <SearchAndFilterBar query={query} /> 


    )
}


export default SearchPage;