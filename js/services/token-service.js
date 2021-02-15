// exemplo objeto decodificado: 
//jwt = {
    //conta: 1 -> conta do usuario
    //exp: 1613334911
    //iat: 1613331311
    //iss: "bank line"
    //sub: "1" -> id do usuario
    //nome: "franklin" 
//}

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const tokenService = {
    parseJwt
}