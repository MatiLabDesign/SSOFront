import axios from "axios"

const CLIENTE_BASE_REST_API = "http://localhost:8080/api/clientes"

class ClienteService{

    getAllClientes() {
        return axios.get(CLIENTE_BASE_REST_API);
    }

    createCliente(cliente){
        return axios.post(CLIENTE_BASE_REST_API, cliente);
    }

}

export default new ClienteService();