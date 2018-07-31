$(document).ready(function () {
    var inputMessage = $("#input_message");
    var inputSend = $("#input_send");
    inputSend.on('click', sendMessage);

    var path = './js/web-worker.js?v=' + new Date().getTime();
    var worker = new Worker(path);
    worker.onmessage = function (event) {
        console.log('Received message ' + event.data);
        doSomehing();
    }

    function sendMessage() {
        var message = inputMessage.val();
        worker.postMessage(message);
    }

    function doSomehing() {
        worker.postMessage('work done!');
    }
});