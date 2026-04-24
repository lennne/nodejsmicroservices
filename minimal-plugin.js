function minimal_plugin(options){
    console.log(options);
}

//immediately executes the 'minimal_plugin' function
//an example of the plugin pattern, API aggregation, best practice for building applications
//and what is this concept? small pieces of software being combined to create a bigger system
require('seneca')().use(minimal_plugin, {foo: 'bar'})