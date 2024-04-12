# Twilio Azure Function

This project is an Azure Function that sends SMS messages using the Twilio API.

## Prerequisites

- Node.js and npm
- Azure Functions Core Tools
- An Azure account
- A Twilio account

## Setup

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Set up your Twilio account and get your Account SID, Auth Token, and a Twilio phone number.
4. Update the `local.settings.json` file with your Twilio Account SID, Auth Token, and phone number.

## Running the Function Locally

1. Start the function with `npm start`.
2. Send a POST request to `http://localhost:7071/api/SMSTrigger` with a JSON body containing `number` and `message` fields. For example:

```json
{
  "number": "<YOUR_PHONE_NUMBER>",
  "message": "Ahoy, world!"
}
```

curl request example:

``` bash
curl -m 70 -X GET http://localhost:7071/api/SMSTrigger/ \
-H "Content-Type: application/json" \
-d '{
  "message": "Ahoy from Azure Functions.",
  "number": "<YOUR_PHONE_NUMBER>"
}'
```

## Deploying to Azure

Run the `twilio-azure-function-create.sh` script to create a new Azure Function App and associated resources.

Deploy the function to Azure with `func azure functionapp publish <FunctionAppName>`, replacing `<FunctionAppName>` with the name of your Function App.

## Author

[Rishab Kumar](https://rishabkumar.com)

- [Twitter](https://twitter.com/rishabincloud)
- [GitHub](https://github.com/rishabkumar7)
