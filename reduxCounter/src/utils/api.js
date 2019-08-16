import axios from './http';
import qs from 'qs';


const base='https://randomuser.me/api/';

const server={
    get(){
        return axios.get(base);
    },
    post(params){
        return axios.post(base,qs.stringify(params));
    }
}

export default server;