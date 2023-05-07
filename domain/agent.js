require('dotenv').config();

module.exports = function(context){

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);


    let messages = []
    messages.push({role: "system", content: `Be concise. If you can answer correctly with just one word, do it.`})

    if(context){
        messages.push({role: "system", content: context})
    }

    return Object.freeze({
        send
    })

    async function send(message){
        messages.push({role: "user", content: message})

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0
          });

          response = completion.data.choices[0].message.content;
          if(response[response.length - 1] == "."){ response = response.slice(0, -1) }

          console.log(response)
        return response
    }
}