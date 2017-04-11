# Burger Bot - IBM Watson Conversation sample

This application demonstrates a simple chat bot built using Watson Conversation.

Watson Conversation is a service that runs on Bluemix (IBM's cloud development platform).  You can create your own instanc and train it to understand and respond to your own domain.  For this app we will be training it to take orders for burgers.

This bot consists of 3 parts: the front-end (which runs in your browser), the backend (which provides the front-end with an API to call), and the Watson Conversation service.

## Sign up to Bluemix
1. Go to [Bluemix](console.ng.bluemix.net)
+ Create an account

## Create Watson Conversation service
1. Log in to [Bluemix](console.ng.bluemix.net)
+ Navigate to the "Catalog"
+ Find the Watson services
+ Click on "Conversation"
+ Click "Create" to create your own instance of the Conversation service

## Train Watson
1. From the Conversation service on Bluemix, click "Launch tool". This will take you to the Conversation tooling where you can train your bot
+ Select the upload button on the "Workspaces" page
+ Select "Choose a file" and select "workspace-burgerbot" from this app
+ This will load and open this workspace
+ Navigate back to the "Workspaces" page and click the 3 dots on your workspace tile, and select "View details"
+ Note down the workspace ID for later

## Get the Burger Bot application
1. Clone or download this app from [GitHub](https://github.com/snrubnomis/burgerbot)

## Configure application
1. Go to your Conversation service on Bluemix (via the "Dashboard")
+ Navigate to "Service Credentials" and click "View credentials"
+ Use the username and password here to update CONVERSATION_USERNAME and CONVERSATION_PASSWORD in the .env file in the app
+ Use the workspace ID we got earlier to update WORKSPACE_ID in the .env file

## Run the app locally
1. [Install Node.js](https://nodejs.org)
+ Open Terminal or Command Prompt
+ cd into this project's root directory
+ Run `npm install` to install the app's dependencies
+ Run `npm start` to start the app
+ Access the running app in a browser at <http://localhost:6008>

## Run the app on Bluemix
1. Log in to [Bluemix](console.ng.bluemix.net)
+ Navigate to the "Catalog"
+ Find "Cloud Foundry Apps"
+ Select "SDK for Node.js"
+ Provide a name for your app
+ Click "Create"
+ Modify "manifest.yml" to use your app's name
+ Follow the "Getting Started" instructions in your app on Bluemix to deploy this app
