# Getting Started
## Installing dependencies
1. Install [node.js](https://nodejs.org/en/) v8.11.1 or greater
1. Open the commandline and navigate to this directory
1. Run `npm install` to install all dependencies found in `packages.json`

## Running the project locally
1. Open the commandline and navigate to this directory
1. Run `au run` to run the server. Add `--watch` to watch the local filesystem for changes and to update the running project as changes are made
1. Navigate to http://localhost:9000/ to see the homepage

## Generating the API Client for Aurelia using TypeScript
1. Install [nswag](https://github.com/RSuter/NSwag) using npm by running `npm install -g nswag` from the commandline. If you have already ran `npm install`, then this should have been installed for you
1. Install the [.NET Core Runtime v2.0.7](https://www.microsoft.com/net/download/all)
1. Run the api server locally from the oureasyregistry-backend repository
1. Run the following command in the commandline `nswag swagger2tsclient /input:http://localhost:9001/swagger.json /output:src/resources/client.ts /template:aurelia /runtime:NetCore20` to generate the API client from the Swagger specification
