onconnect = function (e) {
    var port = e.ports[0];
    port.postMessage('client connect: ' + port);
    port.onmessage = function (e) {
        port.postMessage('pong'); // not e.ports[0].postMessage!
        // e.target.postMessage('pong'); would work also
    }
}