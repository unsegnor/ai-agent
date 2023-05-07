module.exports = function(user_interface){
    return Object.freeze({
        createAgent,
        send,
        getLastMessageFromAgent
    })

    async function createAgent(context){
        return await user_interface.createAgent(context)
    }

    async function send(agentName, message){
        return await user_interface.send(agentName, message)
    }

    async function getLastMessageFromAgent(agentName){
        //return last message received from agent
    }
}
