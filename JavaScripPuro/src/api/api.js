export const BASE_URL_API = "http://localhost:8080/api";

const api = axios.create({
    baseURL: BASE_URL_API,
    headers: {
        "content-type": "application/json",
        "accep-language": "pt-BR"
    },
    ValidateStatus: function(status){
        return staus >= 200 && status < 410; // defaut
    }
});

export default api;

export function apiAxios(path, params){
    let localUrl = new URL(BASE_URL_API = path);
    localUrl.search = new URLSearchParams(params).toString();
    return api.get(localUrl);
}