import axios from "axios";

export function findAllWines(){
    return axios.get("http://localhost:8888/api/wines").then((res) => res.data)
}

