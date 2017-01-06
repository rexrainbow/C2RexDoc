# [Categories](categories.index.html) > [Firebase](firebase.index.html) > rex_firebase

## Introduction

Access database of [firebase](https://www.firebase.com/).

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_firebase.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_firebase.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-firebase_t121776)

----

[TOC]

## Dependence

- [rex_firebase_apiv3](http://c2rexplugins.weebly.com/rex_firebase_apiv3.html)

## Usage

### Write

#### Set value or remove key

```mermaid
graph TB

ActSetValue["Action:Set value<br>Action:Set boolean value<br>Action:Set JSON<br>Action:Set server timestamp<br>Action:Remove"] --> ActionIsSuccess

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| CondOnSuccess["Condition:On complete"]
ActionIsSuccess --> |No| CondOnError["Condition:On error"]
CondOnError --- ExpError["Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

 [Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHkjiX6cOko3oadNcx)

1. Writing
   - `Action:Set value`
   - `Action:Set boolean value`
   - `Action:Set JSON`
   - `Action:Set server timestamp`
   - `Action:Remove`
2. Callback
   - Success : `Condition:On complete`
   - Failed : `Condition:On error`
     - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode`

#### Append a child  

```mermaid
graph TB

ActPush["Action:Push value<br>Action:Push boolean value<br>Action:Push JSON<br>Action:Push server timestamp"] --> ActionIsSuccess

subgraph Callback
ActionIsSuccess{Action<br>is success} --> |Yes| CondOnSuccess["Condition:On complete"]
ActionIsSuccess --> |No| CondOnError["Condition:On error"]
CondOnSuccess --- ExpResult["Expression:LastPushRef"]
CondOnError --- ExpError["Expression:LastErrorMessage<br>Expression:LastErrorCode"]
end
```

[sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHkjko-xeCSgVDPiLD)
1. Writing
    - `Action:Push value`
    - `Action:Push boolean value`
    - `Action:Push JSON`
    - `Action:Push server timestamp`
2. Callback
    - Success : `Condition:On complete`
      - `Expression:LastPushRef`
    - Failed : `Condition:On error`
      - Error :  `Expression:LastErrorMessage`, `Expression:LastErrorCode`

#### Transaction 

- Set value according to current value

```mermaid
graph TB

ActTransaction["Action:Transaction"] --> CondOnTransaction["+Condition:On transaction"]

subgraph Transaction
CondOnTransaction --> IsNullValue{Value is null<br>Condition:TransactionIn is null}
IsNullValue --> |No| ExpTransaction["Expression:TransactionIn"]
IsNullValue --> |Yes| HasReturnValue{Has<br>Return value}
ExpTransaction --> HasReturnValue
HasReturnValue --> |Yes| ActSetValue["Set return value<br>----<br>Action:Set value<br>Action:Set JSON<br>(category: Transaction)"]
end

HasReturnValue --> |"No,<br>Abort"| CondOnAbort["+Condition:On aborted<br>(category: Transaction - completed)"]
ActSetValue --> TryWriting{Try writing}
TryWriting --> |Success| ConOnComplete["Condition:On complete<br>(category: Transaction - completed)<br> <br>Expression:TransactionResult"]
TryWriting --> |Failed| CondOnTransaction
TryWriting --> |Error| CondOnError["Condition:On error<br>(category: Transaction - completed)<br> <br>Expression:LastErrorMessage<br>Expression:LastErrorCode"]
```

Sample capx

1. `Action:Transaction`

2. `Condition:On transaction`

   1. Read value
      - `Condition:TransactionIn is null`
        - Value is null
      - Else
        - `Expression:TransactionIn`
   2. Write value
      - `Action:Set value`  (category: Transaction)
      - `Action:Set JSON`  (category: Transaction)
      - Abort if writing nothing

3. Callback

   - Writing success
     - `Condition:On complete`  (category: Transaction - completed)
       - `Expression:TransactionResult`


- Writing failed
     - Go to step 2
- Error
     - `Condition:On error`   (category: Transaction - completed)
       - `Expression:LastErrorMessage`, `Expression:LastErrorCode`
- Abort
     - `Condition:On aborted`   (category: Transaction - completed)

----

### Read

#### Read value

```mermaid
graph TB

ActRead["Action:Add once<br>Event type = Value changed"] --> OnReceive["Condition:On received"]

subgraph Callback
OnReceive --- ExpResult["Condition:LastData is null<br>Expression:LastData"]
end
```

1. `Action:Add once`
   - Set parameter `Event type`  to `Value changed`
2. `Condition:On received`
   - `Condition:LastData is null`
     - Value is null
   - Else
     - `Expression:LastData`

#### Monitor event

```mermaid
graph TB

ActRegisterListener["Action:Add callback<br>Event type = Value changed<br>..."] --> OnReceive["Condition:On received"]

subgraph Callback
OnReceive --- ExpResult["Condition:LastData is null<br>Expression:LastData"]
end
```





----

###My connection status

```mermaid
graph TB

Idle[Idle] --> IsDetection{"Property:<br>Connection detection"}
IsDetection --> |Yes| DetectionStart["Detection started:"]
DetectionStart --> |On line| Connected["Connected:<br>+Condition:On connected"]
Connected --> |Off line| Disconnected["Disconnected:<br>+Condition:On disconnected"]
Disconnected --> |On line| Connected

subgraph State:Disconnected
Disconnected
end

subgraph State:Connected
Connected
end

subgraph State:Detection started
DetectionStart
end

subgraph State:Idle
Idle
end
```



[sample capx-V3](https://1drv.ms/u/s!Am5HlOzVf0kHkjda4qpESBCH5iBm)

- State: Idle
  - Set property `Connection detection` to `Yes` to enable
    - Go to *State: Detection started*


- State: Detection started
  - Connected
    - Go to *State: Connected*


- State: Connected
  - `Condition:On connected`
  - `Condition:Is connected` returns true
  - Disconnected or `Action:Go offline`
    - Go to *State: Disconnected*
- State: Disconnected
  - `Condition:On disconnected`
  - Connected or `Action:Go online`
    - Go to *State: Connected*.


---

### Clock skew

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2406&authkey=!AE0EdFCaU4ERFNw&ithint=file%2ccapx)

- Set property `Server time offset detection` = `Yes` to enable updating continuously
- `Expression:EstimatedTime` = `Expression:ServerTimeOffset` + current client time