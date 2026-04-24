// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-type': 'text/plain'});
//     res.end('hello world');
// })

// server.listen(8000);

// seneca code
var seneca = require('seneca')();

// //adding a service to seneca
// seneca.add({role: 'math', cmd:'sum'}, function (msg, respond){
//     var sum = msg.left + msg.right;
//     respond(null, {answer: sum})
// })

// //another service
// seneca.add({role: 'math', cmd:'product'}, function(msg, respond){
//     var product = msg.left * msg.right;
//     respond(null, {answer: product})
// })

// // call the seneca service(also referred to as send something to the seneca
// // service and whatever has been programmed inside will handle your request)

// seneca.act({role: 'math', cmd: 'sum', left: 2, right: 3}, console.log);
// // console.log will be converted by respond(null, {answer: product}) and it'll appear as `console.log(null, {answer: product})`

// seneca.act({role: 'math', cmd: 'product', left: 2, right: 3}, console.log);

// start
//adding a service to seneca
// seneca.add({role: 'math', cmd:'sum'}, function (msg, respond){
//     var sum = msg.left + msg.right;
//     respond(null, {answer: sum})
// })

// //another service
// seneca.add({role: 'math', cmd:'product'}, function(msg, respond){
//     var product = msg.left * msg.right;
//     respond(null, {answer: product})
// })


// seneca.act({role: 'math', cmd:'sum', left: 2, right: 3}, function(err, data){
//     if(err){
//         return console.error(err)
//     }
//     console.log(data)
// })

// seneca.act({role: 'math', cmd: 'product', left: 2, right: 3}, console.log)


//dependency injection example
// seneca.add({component: 'greeter'}, function(MessageChannel, respond){
//     respond(null, {message: 'Hello ' + message})
// })

// //dependency injection because, when this coonsumer is calling the producer above, it can pass in the interface, in this case, the message
// seneca.act({component: 'greeter', name: 'David'}, function(error, response){
//     if(error) return console.log(error);
//     console.log(response.message)
// })

// Pattern matching in seneca using "Patrun"
seneca.add({cmd: 'wordcount'}, function(msg, respond){
    var length = msg.phrase.split(' ').length;
    respond(null, {words: length})
})

seneca.add({cmd: 'wordcount', skipShort: true}, function(msg, respond){
    var length = msg.phrase.split(' ');
    var validWords = 0;
    for (var i = 0; i < length.length; i++){
        if(length[i].length > 3){
            validWords++;
        }
    }
    respond(null, {words: validWords})
})

seneca.act({cmd: 'wordcount', phrase: 'Hello world this is Seneca'}, function(err, response){
    console.log(response);
})

seneca.act({cmd: 'wordcount', skipShort: true, phrase: 'Hello world this is Seneca' }, function(err, response){
    console.log(response);
})