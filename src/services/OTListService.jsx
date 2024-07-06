import axios from "axios";
import { OT_BASE_REST_API_URL } from "./../constants/API_URL";

class OTListService{

    getAllOT(){
        return axios.get(OT_BASE_REST_API_URL);
    }

}

export default new OTListService();