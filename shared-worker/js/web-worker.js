onconnect = function (e) {
    var port = e.ports[0];
    port.addEventListener('message', function (e) {
        port.postMessage('You said: ' + e.data);
    }, false);
    port.start();
    // port.postMessage('client connect: ' + port);
    // port.onmessage = function (e) {
    //     port.postMessage('pong'); // not e.ports[0].postMessage!
    //     // e.target.postMessage('pong'); would work also
    // }
}