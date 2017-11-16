# [Categories](categories.index.html) > [Firebase](firebase.index.html) > rex_firebase_savedata

## Introduction

Private save slots.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_firebase_savedata.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_firebase_savedata.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-firebase_t121776)

----

[TOC]

## Dependence

- [rex_firebase_apiV3](rex_firebase_apiv3.html)

## Usage

### Data structure on firebase

```
<sub-domain>\
    <UserID>
        headers\
    	    <slotName>
    		    <key> - value
    
    	bodies\
    	    <slotName>
    		    <key> - value
```

- Each user has a **private** slots set
  - Each slot has
    - Header
      - Key-value pairs, to describe this slot for indexing, 
      - For instance, title, author, date of email
    - Body
      - Key-value pairs, 
      - For instance, content of email

----

### Save

```mermaid
graph TB

ActSetOwner["Action:Set owner"] --> ActPrepare["Action:Set value<br>Action:Set boolean value<br>Action:Set JSON<br>Action:Remove key"]
ActPrepare --> ActSave["Action:Save"]
ActSave --> ActionIsSuccess

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| CondOnSuccess["Condition:On save"]
ActionIsSuccess --> |No| CondOnError["Condition:On save error"]
CondOnError --- ExpError["Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

[Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHkj1dKYwothGswmxD), [sample capx2](https://1drv.ms/u/s!Am5HlOzVf0kHk1uF5STtZ2Rfezaf)

1. `Action:Set owner`

   - Get UserID from [authentication](rex_firebase_authentication.html)

2. Prepare slot

   - `Action:Set value`

     - Parameter `Key` supports dot-notation. For example, set `pos.x` to `10` to update header or body with

     ```json
     {
       "pos":{
         "x": 10
       }
     }
     ```

   - `Action:Set boolean value`

   - `Action:Set JSON`

   - `Action:Remove key`

3. `Action:Save`

4. Callback

   - Success : `Condition:On save`
   - Failed : `Condition:On save error`
     - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode` 

### Load

#### Flow chart of load headers

```mermaid
graph TB

ActSetOwner[Action:Set owner] --> ActGetHeaders["Action:Get all headers"]
ActGetHeaders --> ActionIsSuccess

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| CondOnGetHeaders["Condition:On get headers<br> <br>Slot:<br>Condition:All slots are empty<br>Condition:Slot is occupied<br> <br>Header value:<br>Expression:HeaderValue(slotName, key)<br>Expression:HeadersToJSON"]
CondOnGetHeaders --- |Headers| CondForEachHeader["Condition:For each header<br> <br>Expression:CurSlotName<br>Expression:CurHeaderValue(key)"]
CondForEachHeader --- |Keys in a header| CondForEachKeyInHeader["Condition:For each key<br> <br>Expression:CurKey<br>Expression:CurValue"]

ActionIsSuccess --> |No| CondOnGetAllHeadersError["Condition:On get headers error<br> <br>Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

#### Flow chart of load body

```mermaid
graph TB

ActSetOwner[Action:Set owner] --> GetHeaders["Get & display headers"]
ActSetOwner --> ActGetBody["Action:Get body"]
ActGetBody --> ActionIsSuccess
GetHeaders --> |User selects a slot| ActGetBody

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| NullBody{Body is Null}
NullBody --> |No| CondOnGetBody["Condition:On get body<br> <br>Expression:BodyValue(key)<br>Expression:BodyToJSON"]
CondOnGetBody --- |Keys in body| CondForEachKeyInBody["Condition:For each key<br> <br>Expression:CurKey<br>Expression:CurValue"]
NullBody --> |Yes| CondOngetUnusedBody["Condition:On get unused body<br> <br>Condition:Body is invalid"]

ActionIsSuccess --> |No| CondOnGetBodyError["Condition:On get body error<br> <br>Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

1. `Action:Set owner`
   - Get UserID from [authentication](rex_firebase_authentication.html)
2. Read headers, optional
   1. `Action:Get all headers`
   2. Callback
      - Success : `Condition:On get headers`
        - `Expression:HeaderValue(slotName, key)`, returns a value
          - `Expression:HeaderValue(slotName, key, defaultValue)`
        - `Expression:HeadersToJSON`, returns a header in JSON string
          - `Expression:HeaderValue(slotName)`
        - `Condition:For each header`, retrieves each header
          - `Expression:CurSlotName`
          - `Expression:CurHeaderValue(key)`
            - `Expression:CurHeaderValue(key, defaultValue)`
        - `Condition:For each key`, in *Load - header* category, retrieves each key in a header
          - `Expression:CurKey`
          - `Expression:CurValue`
        - Slot
          - `Condition:All slots are empty`, returns true if no slot is used
          - `Condition:Slot is occupied`, returns true if a slot is used
      - Failed : `Condition:On get headers error`
        - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode` 
3. Read a body
   1. `Action:Get body`
   2. Callback
       - Success :
           - Body is valid (i.e. not null) : `Condition:On get body`
               - `Expression:BodyValue(key)`, returns a value
                   - `Expression:BodyValue(key, defaultValue)`
               - `Expression:BodyToJSON`, returns body in JSON string
                   - `Expression:BodyValue`
               - `Condition:For each key`, in *Load - body* category, retrieves each key in a header
                   - `Expression:CurKey`
                   - `Expression:CurValue`
           - Else, `Condition:On get unused body`
               - `Condition:Body is invalid`, returns true
       - Failed : `Condition:On get body error`
           - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode` 

### Clean

```mermaid
graph TB

ActSetOwner["Action:Set owner"] --> ActClean["Action:Clean slot<br>Action:Clean all slots"]
ActClean --> ActionIsSuccess

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| CondOnSuccess["Condition:On clean"]
ActionIsSuccess --> |No| CondOnError["Condition:On clean error"]
CondOnError --- ExpError["Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

1. `Action:Set owner`
   - Get UserID from [authentication](rex_firebase_authentication.html)
2. `Action:Clean slot`, or `Action:Clean all slots`
3. Callback
   - Success : `Condition:On clean`
     - Slot will become *unused*
   - Failed : `Condition:On clean error`
     - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode` 

----

### Debug panel

Current loaded headers and loaded body will be presented on debug panel.

----

## Security

Add security rule to make private slots set.  ([Reference](https://firebase.google.com/docs/database/security/securing-data))

Assume that sub domain is `save-data` :

```json
{
    "rules": {
        "save-data": {
            "$user": {
                ".read":"auth.uid === $user",
                ".write":"auth.uid === $user"
            }
        }
    }
}
```
