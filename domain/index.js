const Agent = require('./agent')
module.exports = function(){
    return Object.freeze({
        createAgent
    })

    function createAgent(){
        return Agent()
    }
}
