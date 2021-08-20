# Paths App

> Work in progress. (No releases yet)

## On this file
- [About the project](#about-the-project)
- [Repo structure](#repo-structure)
- [Software Requirements](#software-requirements)
- [API Dependencies](#api-dependencies)
- [Dev dependencies](#dev-dependencies)
- [React app dependencies](#react-app-dependencies)
- [React dev dependencies](#react-dev-dependencies)
- [Contributions](#contributions)
- [Other information](#other-information)

## About the project
This is the repository for the Learning Paths App. This app will help the user keep track of their learning progress in almost any area of interest they may have. Users will be able to create, share and use learning paths designed for a specific subject which contain links to useful resources. 

The main features of this project are:
- Keep track of your progress
- Create, share and follow learning paths
- Suggest useful resources for a learning path

## Repo structure
The project contains two main directories: `src/`, which has the files for the web API and `client/`, the folder for the React App. As the project improves and grows, at some point I'll probably create a dedicated repository for the client web app. 

```
learning_paths_app/
├── README.md
├── .gitignore
├── index.d.ts (Ts type definitions)
├── package.json (API package)
├── tsconfig.json (Ts compiler config)
└── src/
	├── index.ts
	├── app.ts
	├── .env.development.sample (sample for .env.development)
	└── controllers/
		├── pathController.ts
		├── resourceController.ts
		├── userController.ts
	└── models/
		├── index.ts
		├── Path.ts
		├── Resource.ts
		├── User.ts
	└── routes/
		├── index.ts
	└── util/
		├── morganMiddleware.ts
		├── authMiddleware.ts
		├── logger.ts
		├── userTokens.ts
└── client/
	├── package.json
	├── .gigignore
	├── tsconfig.json
	└── src/
		├── index.tsx
		├── App.tsx
		├── components/ (React components)
		├── pages/ (Pages for the React app)
		├── api/ (Axios methods to make requests)
		└── context/ (Context for the React App)
	└── public/
		├── ... (public client files)
└── dist/
	├── ... (compiled and minified .js files)
```

## Software requirements
- NodeJs (^12.0.0)
- Typescript (4.1.3 used)
- Git
- A MongoDB Atlas Cluster / MongoDB local instance

## API Dependencies
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [morgan](https://www.npmjs.com/package/morgan)
- [winston](https://www.npmjs.com/package/winston)
- [colors](https://www.npmjs.com/package/colors)

### Dev dependencies
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/dotenv]()
- [@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt)
- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
- [@types/morgan](https://www.npmjs.com/package/@types/morgan)
- [@types/jest](https://www.npmjs.com/package/@types/jest)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)

## React App Dependencies
- [react](https://www.npmjs.com/package/react)
- [axios](https://www.npmjs.com/package/axios)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [semantic-ui-css](https://www.npmjs.com/package/semantic-ui-css)
- [semantic-ui-react](https://www.npmjs.com/package/semantic-ui-react)
- [web-vitals](https://www.npmjs.com/package/web-vitals)

### React dev dependencies
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)
- [@types/jest](https://www.npmjs.com/package/@types/jest)
- [@types/node](https://www.npmjs.com/package/ts-node)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)

## Contributions
For the time being, I am not looking for contributions to the project. Also, I need to learn more about open source.

## Other information
This project is work in progress. If you are interested, take a look at the project board: [Development for 1.0](https://github.com/Frozen-Burrito/learning-paths-app/projects/1)
