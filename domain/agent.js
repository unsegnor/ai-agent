require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

module.exports = function(context){
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);
    const defaultContext = `Be concise. Avoid explanations unless you are asked.`
    let messages = []

    addContext(defaultContext)
    if(context) addContext(context)

    return Object.freeze({
        send,
        addContext,
        getContext
    })

    function addContext(context){
        messages.push({role: "system", content: context})    
    }

    function getContext(){

        var context = messages[1].content

        for (let index = 2; index < messages.length; index++) {
            const message = messages[index];
            if(message.role == "system"){
                context += "\n" + message.content
            }
        }

        return context;
    }

    async function send(message){
        messages.push({role: "user", content: message})

        const completion = await openai.createChatCompletion({
            model: "gpt-4o-mini",
            messages,
            temperature: 0
          });

          response = completion.data.choices[0].message.content;
          messages.push({role: "assistant", content: response})
          if(response[response.length - 1] == "."){ response = response.slice(0, -1) }

          console.log(response)
        return response
    }
}
