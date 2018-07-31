self.addEventListener('message', function (e) {
    this.console.log('You said: ' + e.data);
}, false);