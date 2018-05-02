/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller, watsonAssistant) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
      console.log(message);
      bot.reply(message, "Hi there, you're on workspace: " + message.text)
    });



};
