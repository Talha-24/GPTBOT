import { useNavigate } from "react-router-dom"

const useUtils = () => {
    const navigate = useNavigate();


    const goTo = (path:string, queryParams = {}) => {
        const query = new URLSearchParams(queryParams).toString();
        navigate(`${path}${query ? `?${query}` : ""}`);
    };

    
    return {
        goTo,
    }
}
export default useUtils