const {expect} = require('chai');
const User = require('./test-user.js');

module.exports = function(user_interface){
    describe('agent', function(){
        this.timeout(10000)
        let user

        this.beforeEach(async function(){
            user = User(user_interface)
        })

        describe('basics', function(){
            it('remember previous interaction', async () => {
                let agent = await user.createAgent()
                await agent.send('my name is Víctor')
                let response = await agent.send(`what's my name?`)
                expect(response).to.contain('Víctor');
            });
    
            it('remember previous interaction', async () => {
                let agent = await user.createAgent()
                await agent.send('I have three apples')
                let response = await agent.send(`how many apples do I have?`)
                expect(response.toLowerCase()).to.contain('three');
            });
    
            it('remember previous interaction with logic', async () => {
                let agent = await user.createAgent()
                await agent.send('I have three apples')
                let response = await agent.send(`If I get another one. how many apples do I have?`)
                expect(response.toLowerCase()).to.contain('four');
            });
    
            it('be concise', async () => {
                let agent = await user.createAgent()
                await agent.send('I have nine apples')
                let response = await agent.send(`how many apples do I have?`)
                expect(response.toLowerCase()).to.contain('nine');
                expect(response.split(' ').length).to.be.below(6);
            });
    
            it('be very concise', async () => {
                let agent = await user.createAgent()
                await agent.send('I have nine apples')
                let response = await agent.send(`how many apples do I have?`)
                expect(response.toLowerCase()).to.equal('nine');           
            });
        })
    })
}
