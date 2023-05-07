const Agent = require('./agent')
module.exports = function(){
    return Object.freeze({
        createAgent,
        send
    })

    function createAgent(context){
        return Agent(context)
    }

    function send(agentName, message){
        
    }
}
