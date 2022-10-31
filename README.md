# Group 8 Project
## Link to application
Website accessible on:[https://grocelist-client.netlify.app](https://grocelist-client.netlify.app) 

## Description
A shared grocery list application for flatmates 

## Tech Stack
The front end is built with React and deployed on Netflify (CI/CD)

The backend is built with MongoDB express and Node/Express.js and deployed on Heroku (CI/CD)


## Features 

### Authentication and Group Management -  Marcell Munnich 
User can register and login

**Note: Register still requires client-side validation**

Users can create/delete groups and create invitations to add other users

### Add Personal Todo - Assigned to Asadul Islam Symon
Users can add and delete  in personal todo and view them on the dashboard

### Dashboard - Nexus Baquir 
Users can view all the todos pending on that day and the reminders for a certain day

Also user can in add in notes for other users to use


### Lists - Deepti Mallampalli 
Users can create group grocery list and delete and view them on the dashboard

### Item Management - Nexus
Users can add and delete items within a group grocery list.

### Event Timeline Management - Deepti Mallampalli
Users can view events within a registered group. Users are then able to hide selected events.
### Reminders 
Users can reminders which they are notified of on that certain day

## Installation
Run
``` 
npm install
```
to install all the packages

## Running the program locally

Run 
```
npm run start

```
to run the program on your local Machine

## Running Backend locally

Make sure to pull the main branch of our server application repository from: [https://github.com/maindotmarcell/Grocelist-Server](https://github.com/maindotmarcell/Grocelist-Server) 
Make sure you have Mongo DB installed on your local machine.
And in a separate terminal run:
```
npm install
```
to install NPM dependency packages

Followed by: 
```
npm run dev
```

By running the two (back-end and front-end) applications simultaneously, you will be able to use the above-mentioned features.
