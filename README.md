
# Formation Développeur d'application - JavaScript React

## 📎 Projet 12 : Sportsee - Développez un tableau de bord d'analytics avec React.

## Technologies :

- React
- CSS
- Recharts


### Backend : Install and Launch

1. Clone the backend repository : `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`

2. Place yourself into the cloned folder, then install dependencies :
`npm install`

3. Launch backend server (port 3000) : 
`yarn dev`

### Frontend : Install and Launch

1. Clone the frontend repository: `git clone https://github.com/FanLubLou/OCR12_SportSee.git`

2. Place yourself into the cloned folder, then install dependencies :
`npm install`

3. Launch backend server (port 3001) : 
`npm start`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

By default, the project is configured to run on port `3001`. This is defined in the `start` script within the `package.json` file:

`json
"scripts": {
  "start": "PORT=3001 react-scripts start"
}`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Development Data / Production Data

- Backend API provides data for users 12 and 18, 
- Users 1 to 6 Data are provided from a mocked data folder. To be the data consistent, Users' data from 1 to 3 are a copy of user 12 Data and Users'data from 4 to 6 are a copy of user 18 Data. 

### EndPoints

#### EndPoints provided by the backend

This project includes four endpoints directly from the backend that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

#### EndPoints provided by the app
- `/user/:id/activity`
- retrieves a user's activity day by day with kilograms and calories.
- `/user/:id/performance` 
- retrieves a user's performance (energy, endurance, etc.).
- `/user/:id/average-sessions`
- retrieves the average sessions of a user per day.

### Demo page

https://sportseebyjc.netlify.app/
Only the development data will work.

### switchable variable to use backend data or mocked data

You can access to a switchable variable in config.js. 
if USE_MOCK_DATA = true, the application will use the mocked data
if USE_MOCK_DATA = false, the application will use the backend data
