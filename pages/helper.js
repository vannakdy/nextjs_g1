import axios from "axios";

export const config = {
    // baseUrl : "https://nitc.cleverapps.io/",
    baseUrl : "https://ten11kh.com:10010/apizdtenV09/",
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


export const fetchDataDemo = (url = "", params = {} , method = "GET") => {
    var token = localStorage.getItem("access_token")
    if(params.is_refresh_token == true){
        token = params.access_token // get access token when refresh token success
    }
    return axios({
        url : "http://localhost:8080/api/" + url,
        data : params,
        method : method,
        headers : {
            'Authorization': 'Bearer ' +token 
        }
    }).then(res=>{
        if(res.data.error && res.data.error_key == "InvalidToken"){
            var refresh_token = localStorage.getItem("refresh_token")
            return axios({
                url : "http://localhost:8080/api/auth/refresh_token",
                data : {
                    refresh_token : refresh_token
                },
                method : "POST"
            }).then(res1=>{
                localStorage.setItem("access_token",res1.data.access_token);
                localStorage.setItem("refresh_token",res1.data.refresh_token);
                localStorage.setItem("username",res1.data.profile.username);
                localStorage.setItem("profile",JSON.stringify(res1.data.profile));
                // recall 
                params.is_refresh_token = true;
                params.access_token = res1.data.access_token;
                console.log("refresh token success!")
                return fetchDataDemo(url,params,method)
            })
        }else{
            return res.data;
        }
       
    }).catch(err=>{
        return {
            error : true,
            message : err
        }
    })
}

