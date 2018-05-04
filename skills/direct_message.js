module.exports = function(controller, contextos, assistant) {

    controller.on('direct_message', function(bot, message) {
        var key_user = message.channel+message.user;

        assistant.sendMessage(String(message.text), contextos[key_user])
            .then(response => {
                // slackController.log('Response from Watson received')
                console.log(response);
                botoes = response.context.botoes;
                if (typeof botoes !== 'undefined' && botoes.length > 0) {
                    
                }
                // do something here and then reply to the user through slack
                // note: Watson's response text is stored in "response.output.text"
                // ("join('\n')" is for cases when the response is multiline)
                contextos[key_user] = response.context;
                bot.reply(message, response.output.text.join('\n'));
            })
            .catch(err => {
                console.log(err);
                console.error(JSON.stringify(err, null, 2));
            });
    });



};