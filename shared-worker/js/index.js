$(document).ready(function () {
    var inputMessage = $("#input_message");
    var inputSend = $("#input_send");
    inputSend.on('click', sendMessage);

    var path = './js/web-worker.js?v=' + new Date().getTime();
    var worker = new SharedWorker(path);
    worker.port.addEventListener("message", function (e) {
        console.log('Received message ' + event.data);
        doSomehing();
    }, false);
    worker.port.start();

    function sendMessage() {
        var message = inputMessage.val();
        worker.port.postMessage(message);
    }

    function doSomehing() {
        console.log('work done!');
    }
});