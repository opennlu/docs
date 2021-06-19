# Entities

Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted.

OpenNLU provides predefined [system entities](#system-entities) that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent.

## System Entities

OpenNLU provides many system entities to extract common types from end-user expressions. For example, the `@sys.color` type can be used to extract values like `red` or `blue`. You can see the full list of system entities in the [System entity reference](#system-entities-reference).

### System Entities Reference

The table below describes all system entities.

| Category      | Name        | Description                  | Output Format             |
|---------------|-------------|------------------------------|---------------------------|
| Date and Time | @sys.time   | Matches a time               | String in ISO-8601 format |
| Numbers       | @sys.number | Ordinal and cardinal numbers | Number                    |

TBD

## Custom Entities

You can create custom entities for matching data specific to your agent. For example, you could define a `vegetable` entity type that can match the types of vegetables available for purchase with a grocery store agent.

## Regexp Entities

Some entities need to match patterns rather than specific terms. For example, national identification numbers, IDs, license plates, and so on. With regexp entities, you can provide regular expressions for matching.

## Limitations

The following limitations apply:

-   Entity names are unique for each agent. Entity names should start with a letter and can contain the following:  `A-Z`,  `a-z`,  `0-9`,  `_`  (underscore),  `-`  (dash).