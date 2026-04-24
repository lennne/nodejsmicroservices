function init(msg, respond){
    console.log('plugin initialized');
    console.log('expensive operation taking place now....DONE')
    respond();
}


function math(options){
    this.add({role: 'math', cmd: 'sum'}, function (msg, respond){
        respond(null, {answer: msg.left + msg.right})
    })

    this.add({role: 'math', cmd: 'product'}, function(msg, respond){
        respond(null, {answer: msg.left * msg.right})
    })

    this.add({init: 'math'}, init);
}

//immediately executes the 'minimal_plugin' function
//an example of the plugin pattern, API aggregation, best practice for building applications
//and what is this concept? small pieces of software being combined to create a bigger system
require('seneca')().use(math).act('role: math, cmd:sum, left:1, right:2', console.log);