# Getting Started

OpenNLU is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using OpenNLU, you can provide new and engaging ways for users to interact with your product.

OpenNLU can analyze text input from your customers. It can also respond to your customers through text.

## OpenNLU Console

OpenNLU provides a web user interface called the OpenNLU Console ([open console](https://console.opennlu.net)). You use this console to create, build, and test agents.

In most cases you should use the OpenNLU Console to build agents, but you can also use the OpenNLU API to build agents for advanced scenarios.

Many quickstart, concept, and how-to guides take you through the steps of using the console.

## Training

When your agent is trained, OpenNLU uses your training data to build machine learning models specifically for your agent. This training data primarily consists of intents, intent training phrases, and entities referenced in an agent; which are effectively used as machine learning data labels. However, agent models are built using parameter prompt responses, agent settings, and many other pieces of data associated with your agent.

Whenever you change your agent, you should ensure that the agent is trained before attempting to use it. Depending on your agent settings, training may occur automatically or manually.

## Best Practice

### Intent Naming

If your agent has many  [intents](intents.md), you should consider a naming scheme that helps you keep them organized. It is common to segment intent names with punctuation, where the specificity increases from left to right. In addition, an intent name should reflect the end-user's intention for a conversational turn.

There are many good naming schemes, but here is one example:

- `phone-service.order.cancel`
- `phone-service.order.create`
- `phone-service.order.change`
- `tv-service.order.cancel`
- `tv-service.order.create`
- `tv-service.order.change`
- `account.balance.get`
- `account.balance.pay`
- `account.address.get`
- `account.address.update`

### Session Client Reuse

You can improve the performance of your application's detect intent API calls by reusing a SessionsClient client library instance for multiple requests.

