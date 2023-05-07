const App = require("./index.js")

module.exports = function(){

    const app = App()
    return Object.freeze({
        createAgent,
        send
    })

    function createAgent(context){
        return app.createAgent(context)
    }

    function send(agentName, message){
        //we could create here a new agent if it doesn't exist
        //return app.send(agentName, message)
    }
}
