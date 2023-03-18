import axios from "axios";
import {ErrorComponent} from "../component/error";
import {GET_CHILD_COMMITS} from "../utils/mockData/mockData";

export const getChildCommit = async (kids, setChildren) => {
    try {
        const result = await Promise.all(kids?.map(async (element) => {
            const response = await axios.get(GET_CHILD_COMMITS(element));
            return response.data
        }));
        setChildren(result);
    } catch (e) {
        return (
            <ErrorComponent/>
        )
    }
}