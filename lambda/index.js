
'use strict';
const Alexa = require('alexa-sdk');


const APP_ID = 'amzn1.ask.skill.5a5f7030-0281-43c6-9880-950a2ca827ac';

const SKILL_NAME = 'SKILL NAME';
const START_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'HELP MESSAGE HERE';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const facts = [
    'INSERT FACT HERE',
    'REMEMBER TO ADD COMMA AT THE END IF YOU WANT TO ADD ANOTHER'

];

const handlers = {
    'LaunchRequest': function () {
        this.emit('RandomFactIntent');
        this.emit(':responseReady');
    },
    'RandomFactIntent': function () {
        
          var message = facts[Math.floor(Math.random() * facts.length)];
        this.response.speak(START_MESSAGE + message);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
