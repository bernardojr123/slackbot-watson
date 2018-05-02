module.exports = function (controller, watsonAssistant) {


    controller.on('direct_message', function(bot, message) {
        console.log(message);

        watsonAssistant.sendToWatson({
            workspace_id: process.env.annaWorkspaceId,
            input: {'text': message.text}

        },  function(err, response) {
            if (err)
                console.log('error:', err);
            else
                var resp = response.watsonData.output.text;
                console.log(response);
                bot.reply(message, resp);
        });

    });

};