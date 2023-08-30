# Auth0 React SDK Sample Application

This sample demonstrates the integration of [Auth0 React SDK](https://github.com/auth0/auth0-react) into a React application created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). The sample is a companion to the [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react).

This sample demonstrates the following use cases:

- [Login](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/components/NavBar.js#L72-L79)
- [Logout](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/components/NavBar.js#L102-L108)
- [Showing the user profile](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/views/Profile.js)
- [Protecting routes](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/views/Profile.js#L33)
- [Calling APIs](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/views/ExternalApi.js)

## Project setup

Use `yarn` to install the project dependencies:

```bash
yarn install
```

## Configuration

### Create an API

For the ["call an API"](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api) page to work, you will need to [create an API](https://auth0.com/docs/apis) using the [management dashboard](https://manage.auth0.com/#/apis). This will give you an API identifier that you can use in the `audience` configuration field below.

If you do not wish to use an API or observe the API call working, you should not specify the `audience` value in the next step. Otherwise, you will receive a "Service not found" error when trying to authenticate.

### Configure credentials

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with your own Auth0 application credentials, and optionally the base URLs of your application and API:

```json
{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}",
  "audience": "{YOUR AUTH0 API_IDENTIFIER}",
  "appOrigin": "{OPTIONAL: THE BASE URL OF YOUR APPLICATION (default: http://localhost:3000)}",
  "apiOrigin": "{OPTIONAL: THE BASE URL OF YOUR API (default: http://localhost:3001)}"
}
```

**Note**: Do not specify a value for `audience` here if you do not wish to use the API part of the sample.

Additonally - If you wish to use the `ManagementClient` portion of the API to proxy calls to your tenant's Management API you will need to create a `.env` file with the following values:

```
DOMAIN={YOUR AUTH0 DOMAIN}
MGMNT_AUDIENCE={YOUR AUTH0 MANAGEMENT API_IDENTIFIER}
CLIENT_ID={YOUR AUTH0 M2M CLIENT ID}
CLIENT_SECRET={YOUR AUTH0 M2M CLIENT SECRET}
```
For more on creating a Machine-to-Machine app for this purpose, see Auth0 documentaion on [Registering Machine-to-Machine Applications](https://auth0.com/docs/get-started/auth0-overview/create-applications/machine-to-machine-apps). 

## Run the sample

### Compile and hot-reload for development

This compiles and serves the React app and starts the backend API server on port 3001.

```bash
yarn run dev
```

## Deployment

### Compiles and minifies for production

```bash
yarn run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
yarn run test
```

## Frequently Asked Questions

If you're having issues running the sample applications, including issues such as users not being authenticated on page refresh, please [check the auth0-react FAQ](https://github.com/auth0/auth0-react/blob/master/FAQ.md).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple sources](https://auth0.com/docs/identityproviders), either social identity providers such as **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce** (amongst others), or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS, or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://auth0.com/docs/connections/database/custom-db)**.
* Add support for **[linking different user accounts](https://auth0.com/docs/users/user-account-linking)** with the same user.
* Support for generating signed [JSON Web Tokens](https://auth0.com/docs/tokens/json-web-tokens) to call your APIs and **flow the user identity** securely.
* Analytics of how, when, and where users are logging in.
* Pull data from other sources and add it to the user profile through [JavaScript rules](https://auth0.com/docs/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click **Sign Up**.
2. Use Google, GitHub, or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/responsible-disclosure-policy) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
