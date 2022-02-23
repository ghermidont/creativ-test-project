import axios from "axios";

export const getBooksRequest = async () => {
    console.log( "getBooksRequest() worked" );
    return await axios.get(`${process.env.REACT_APP_API}/books`);
};