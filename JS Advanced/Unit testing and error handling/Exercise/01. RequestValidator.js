function validator(http) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^([a-zA-Z\.0-9]+|\*)$/;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let msgPattern = /^[^<>&'"\\]*$/;

    if (!http.hasOwnProperty('method') || !methods.includes(http.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!http.hasOwnProperty('uri') || !uriPattern.test(http.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!http.hasOwnProperty('version') || !versions.includes(http.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!http.hasOwnProperty('message') || !msgPattern.test(http.message)) {
        throw new Error('Invalid request header: Invalid Message');
    } else {
        return http;
    }
}