$(document).ready(function () {
    var channel = new MessageChannel();
    var worker1 = new Worker("js/web-worker.js");
    var worker2 = new SharedWorker("js/shared-web-worker.js");

    // Setup the connection: Port 1 is for worker 1
    worker1.postMessage({
        command: "connect",
    }, [channel.port1]);

    // Setup the connection: Port 2 is for worker 2
    worker2.port.postMessage({
        command: "connect",
    }, [channel.port2]);

    worker1.postMessage({
        command: "forward",
        message: "this message is forwarded to worker 2"
    });
});