$(document).ready(function () {
    var inputMessage = $("#input_message");
    var inputSend = $("#input_send");
    inputSend.on('click', sendMessage);

    var workerPath = './js/web-worker.js?v=' + new Date().getTime();
    var sharedWorkerPath = './js/shared-web-worker.js?v=' + new Date().getTime();
    var worker = new Worker(workerPath);
    var sharedWorker = new SharedWorker(sharedWorkerPath);
    
});