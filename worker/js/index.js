$(document).ready(function () {
    var path = './js/web-worker.js?v=' + new Date().getTime();
    var worker = new Worker(path);

    function sendMessage() {
        worker.postMessage('Hello World');
    }
});