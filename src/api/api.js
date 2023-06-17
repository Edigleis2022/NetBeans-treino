const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "content-type": "application/json",
        "accep-language": "pt-BR"
    },
    ValidateStatus: function(status){
        return staus >= 200 && status < 410; // defaut
    }
});

export default api;