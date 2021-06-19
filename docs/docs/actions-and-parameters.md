# Actions & Parameters

## Actions

The action field is a simple convenience field that assists in executing logic in your service.

When building an agent, you can set this field to any text you find useful.

When an intent is matched at runtime, OpenNLU provides the action value to your fulfillment webhook request or the API interaction response. It can be used to trigger specific logic in your service.

## Parameters

When an intent is matched at runtime, OpenNLU provides the extracted values from the end-user expression as parameters. Each parameter has a type, called the entity type, which dictates exactly how the data is extracted. Unlike raw end-user input, parameters are structured data that can easily be used to perform some logic or generate responses.
When building an agent, you control how data is extracted by annotating parts of your training phrases and configuring the associated parameters.

The following list shows the fields of a parameter configuration. Examples are shown for the training phrase "book a room on Tuesday", where "Tuesday" is annotated.

- **Required**: Check this box if the parameter is required for the intent to be complete. See the Slot filling with required parameters section below.

- **Parameter Name**: A name that identifies the parameter. Example: `date`.

- **Entity**: The entity type associated with the parameter. Example: `@sys.date`.

- **Value**: In most cases, this is set to a parameter reference like `$parameter-name`, which is used as a placeholder for the extracted value at runtime. However, this field can be used to select alternate values as well. See the Parameter values and parameter references section below. Example: `$date`.

- **Default value**: This is the default value for the parameter when the end-user does not supply one. To change the default value with the console, you must hover over the parameter row and click the menu on the right.

When an intent is matched at runtime, OpenNLU provides parameter data to your [fulfillment webhook request](fulfillment.md) or the API interaction response. These are provided as a mapping from parameter names to parameter values.