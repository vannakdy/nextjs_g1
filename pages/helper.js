import axios from "axios";

export const config = {
    // baseUrl : "https://nitc.cleverapps.io/",
    baseUrl : "https://ten11kh.com:10010/apizdtenV08/",
    // baseUrl : "http://localhost:8080/",
    imagePath : "https://zandokh.com/image/"
}

export const fetchData = (url = "", params = {} , method = "GET") => {
    return axios({
        url : config.baseUrl + url,
        data : params,
        method : method,
        // headers : 
    }).then(res=>{
        return res.data;
    }).catch(err=>{
        return {
            error : true,
            message : err
        }
    })
}

