import axios from "axios";

let instance=axios.create({
    // baseURL:"http://localhost:3001"
    baseURL:"https://mentorstudent12.herokuapp.com"
})

export default instance