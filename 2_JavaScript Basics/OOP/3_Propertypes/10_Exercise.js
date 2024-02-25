
function stopWatch() {
    let startTime, endTime, running, duration = 0;
    
    Object.defineProperty(this, 'duration', {
        get: function() {return duration; },
        set: function(value) {duration = value}
    })
    Object.defineProperty(this, 'startTime', {
        get: function() {return startTime; }
    })
    Object.defineProperty(this, 'endTime', {
        get: function() {return endTime; }
    })
    Object.defineProperty(this, 'running', {
        get: function() {return running; }
    })
}

const c1 = new stopWatch();

stopWatch.prototype.start = function() {
    if(this.running)
        throw new Error('stopWatch has already started.');

    this.running = true;
    this.startTime = new Date();
}

stopWatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;   
}

stopWatch.prototype.stop = function() {
    if(!this.running)
        throw new Error('stopWatch is not started.');

    this.running = false;
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
};

