# Start Wars Movies List
This LGPL project creates a minimal React frontend application to connect with the [Star Wars API](https://swapi.dev/).
It was created as part of a job interview.


## Running the application

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test -- --coverage --watchAll`
Launches the test runner in the interactive watch mode.\
Below you can see the test status report given by the command below:

|--------------------------|---------|----------|---------|---------|-------------------|
|File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|--------------------------|---------|----------|---------|---------|-------------------|
|All files                 |   96.67 |      100 |     100 |   96.67 |                   |
|  App.tsx                 |     100 |      100 |     100 |     100 |                   |
| src/components/CardsGrid |     100 |      100 |     100 |     100 |                   |
|  CardsGrid.tsx           |     100 |      100 |     100 |     100 |                   |
| src/components/MovieCard |     100 |      100 |     100 |     100 |                   |
|  MovieCard.tsx           |     100 |      100 |     100 |     100 |                   |
| src/pages/home           |     100 |      100 |     100 |     100 |                   |
|  Home.tsx                |     100 |      100 |     100 |     100 |                   |
| src/routes               |     100 |      100 |     100 |     100 |                   |
|  index.tsx               |     100 |      100 |     100 |     100 |                   |
| src/services             |     100 |      100 |     100 |     100 |                   |
|  api.ts                  |     100 |      100 |     100 |     100 |                   |
|--------------------------|---------|----------|---------|---------|-------------------|


## Project Structure
The source files presented in this project are listed and briefly explained below:
```
├── App.test.tsx - test main app
├── App.tsx - main app component
├── components
│   ├── CardsGrid - Display all movie cards
│   │   ├── CardsGrid.css
│   │   └── CardsGrid.tsx
│   └── MovieCard - Display a movie with its name and picture
│       ├── MovieCard.css
│       └── MovieCard.tsx
├── models
│   └── movie.ts - Data representation of a movie given by API
├── pages
│   ├── favorites - Display all favorite movies
│   │   └── Favorites.tsx
│   └── home - Display all movies
│       ├── Home.css
│       └── Home.tsx
├── routes - Structure of all URLs of the project
│   └── index.tsx
├── services - Handles HTTP requests to API
│   └── api.ts
└── styles - Global styling
    └── Global.css
```


## Learn More
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
