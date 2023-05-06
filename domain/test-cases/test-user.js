module.exports = function(user_interface){
    return Object.freeze({
        createAgent
    })

    async function createAgent(){
        return await user_interface.createAgent()
    }
}
