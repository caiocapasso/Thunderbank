const urlBase = 'http://localhost:8080/conta/dashboard';

const headers = new Headers({ 'Content-Type': 'application/json' });
const token = localStorage.getItem('token');
const obterSaldo = () => {

    if (token) {
        headers.append('authorization', 'Bearer ' + token)
        const jwtDecode = parseJwt(token)
        return fetch(urlBase + '/' + jwtDecode.conta, { method: 'GET', headers: headers }).then(response => {
            return response.json();
        })
    }

}


const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const dashboardService = {
    obterSaldo
}