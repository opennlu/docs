(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{360:function(e,t,s){e.exports=s.p+"assets/img/intent-match-forecast.fc37adc7.svg"},361:function(e,t,s){e.exports=s.p+"assets/img/intent-match-respond-basic.77684732.svg"},378:function(e,t,s){"use strict";s.r(t);var n=s(45),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"intents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intents"}},[e._v("#")]),e._v(" Intents")]),e._v(" "),n("p",[e._v("An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression, OpenNLU matches the end-user expression to the best intent in your agent. Matching an intent is also known as intent classification.")]),e._v(" "),n("p",[e._v("For example, you could create a weather agent that recognizes and responds to end-user questions about the weather. You would likely define an intent for questions about the weather forecast. If an end-user says "),n("code",[e._v("What's the forecast?")]),e._v(", OpenNLU would match that end-user expression to the forecast intent. You can also define your intent to extract useful information from the end-user expression, like a time or location for the desired weather forecast. This extracted data is important for your system to perform a weather query for the end-user.")]),e._v(" "),n("p",[n("img",{attrs:{src:s(360),alt:""}})]),e._v(" "),n("p",[e._v("A basic intent contains the following:")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"#user-says"}},[e._v("User Says")]),e._v(": These are example phrases for what end-users might say. When an end-user expression resembles one of these phrases, OpenNLU matches the intent. You don't have to define every possible example, because OpenNLU's built-in machine learning expands on your list with other, similar phrases.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#action"}},[e._v("Action")]),e._v(": You can define an action for each intent. When an intent is matched, OpenNLU provides the action to your system, and you can use the action to trigger certain actions defined in your system.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#parameters"}},[e._v("Parameters")]),e._v(": When an intent is matched at runtime, OpenNLU provides the extracted values from the end-user expression as parameters. Each parameter has a type, called the "),n("RouterLink",{attrs:{to:"/docs/entities.html"}},[e._v("entity type")]),e._v(", which dictates exactly how the data is extracted. Unlike raw end-user input, parameters are structured data that can easily be used to perform some logic or generate responses.")],1)]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#responses"}},[e._v("Responses")]),e._v(": You define text, speech, or visual responses to return to the end-user. These may provide the end-user with answers, ask the end-user for more information, or terminate the conversation.")])])]),e._v(" "),n("p",[n("img",{attrs:{src:s(361),alt:""}})]),e._v(" "),n("p",[e._v("A more complex intent may also contain the following:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#contexts"}},[e._v("Contexts")]),e._v(": OpenNLU contexts are similar to natural language context. If a person says to you "),n("code",[e._v("they are orange")]),e._v(", you need context in order to understand what the person is referring to. Similarly, for OpenNLU to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent.")])]),e._v(" "),n("h2",{attrs:{id:"user-says"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-says"}},[e._v("#")]),e._v(" User Says")]),e._v(" "),n("p",[e._v("Training phrases are example phrases for what end-users might type or say, referred to as end-user expressions. For each intent, you create many training phrases. When an end-user expression resembles one of these phrases, OpenNLU matches the intent.")]),e._v(" "),n("p",[e._v("For example, the training phrase "),n("code",[e._v("I want pizza")]),e._v(" trains your agent to recognize end-user expressions that are similar to that phrase, like "),n("code",[e._v("Get a pizza")]),e._v(" or "),n("code",[e._v("Order pizza")]),e._v(".")]),e._v(" "),n("p",[e._v("You don't have to define every possible example, because OpenNLU's built-in machine learning expands on your list with other, similar phrases. You should create at least 10-20 (depending on complexity of intent) training phrases, so your agent can recognize a variety of end-user expressions. For example, if you want your intent to recognize an end-user's expression about their favorite color, you could define the following training phrases:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("I like red")])]),e._v(" "),n("li",[n("code",[e._v("My favorite color is yellow")])]),e._v(" "),n("li",[n("code",[e._v("black")])]),e._v(" "),n("li",[n("code",[e._v("Blue is my favorite")]),e._v("\n...")])]),e._v(" "),n("h2",{attrs:{id:"action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[e._v("#")]),e._v(" Action")]),e._v(" "),n("p",[e._v("The action field is a simple convenience field that assists in executing logic in your service.")]),e._v(" "),n("p",[e._v("When building an agent, you can set this field to any text you find useful.")]),e._v(" "),n("p",[e._v("When an intent is matched at runtime, OpenNLU provides the action value to your fulfillment webhook request or the API interaction response. It can be used to trigger specific logic in your service.")]),e._v(" "),n("h2",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),n("p",[e._v("When an intent is matched at runtime, OpenNLU provides the extracted values from the end-user expression as parameters. Each parameter has a type, called the entity type, which dictates exactly how the data is extracted. Unlike raw end-user input, parameters are structured data that can easily be used to perform some logic or generate responses.")]),e._v(" "),n("p",[e._v("See the "),n("RouterLink",{attrs:{to:"/docs/actions-and-parameters.html#parameters"}},[e._v("actions and parameters")]),e._v(" references.")],1),e._v(" "),n("h2",{attrs:{id:"responses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#responses"}},[e._v("#")]),e._v(" Responses")]),e._v(" "),n("p",[e._v("Intents have a built-in response handler that can return responses after the intent is matched. This feature only supports static responses, though you can use "),n("a",{attrs:{href:"#parameters"}},[e._v("parameter references")]),e._v(" in these responses to make them somewhat dynamic. This is helpful for recapping information provided by the end-user. For example, your intent response could look like: "),n("code",[e._v("Okay, I booked a room for you on $date")]),e._v(".")]),e._v(" "),n("p",[e._v("In some cases, this is all you need. In cases where your code needs to take some action or build a more dynamic response, you should use one of the dynamic response options below. Agents typically use a combination of static and dynamic responses.")]),e._v(" "),n("p",[e._v("Multiple types of responses can be provided. The basic response type is a text response. Other types of responses are available (image, audio, synthesized speech, and so on), some of which are platform-specific.")]),e._v(" "),n("p",[e._v("If you define more than one response variation for an intent, your agent will select a response at random. You should add several response variations to make your agent more conversational.")]),e._v(" "),n("p",[e._v("When building an agent, you should provide response data for each intent. When you use the API or "),n("RouterLink",{attrs:{to:"/docs/fulfillment.html"}},[e._v("fulfillment")]),e._v(" to interact with OpenNLU, you technically may not need to provide response data, because both of these methods can dynamically generate any response. However, if you want to use the simulator for testing or define intents that have a simple response, you should provide response data.")],1),e._v(" "),n("p",[e._v("As a general rule, your intent responses should prompt the end-user to provide an expression that will match another intent. Your responses should also guide the end-user to provide specific data. For example, a question like "),n("code",[e._v("What city were you born in?")]),e._v(" is better than a more open-ended question like "),n("code",[e._v("Where were you born?")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"contexts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contexts"}},[e._v("#")]),e._v(" Contexts")]),e._v(" "),n("p",[e._v('OpenNLU contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for OpenNLU to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent.')]),e._v(" "),n("p",[e._v("See the "),n("RouterLink",{attrs:{to:"/docs/contexts.html"}},[e._v("contexts")]),e._v(" references.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);