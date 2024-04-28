# Per Scholas: SBA319 MongoDB Database Application
## Movie Database
MongoDB Database Application

## Usage
The Database allows users to :
- View information
- Utilize API to get movie data
    - title
    - director
    - genre
- Add a movie, genre, or director
- Edit a movie, genre, or director
- Delete a movie, genre, or director

```
// Define routes for movies
app.get('/movies', movieController.getAllMovies);
app.get('/movies/:id', movieController.getMovieById);
app.get('/movies/title/:title', movieController.getMoviesByTitle);
app.get('/movies/genre/:genreId', movieController.getMoviesByGenre);
app.get('/movies/director/:directorId', movieController.getMoviesByDirector);
app.post('/movies', movieController.createMovie);
app.put('/movies/:id', movieController.updateMovie);
app.delete('/movies/:id', movieController.deleteMovie);

// Define routes for directors
app.get('/directors/lastName/:lastName', directorController.getDirectorByLastName);
app.get('/directors/:id', directorController.getDirectorById);
app.get('/directors', directorController.getAllDirectors);
app.post('/directors', directorController.createDirector);
app.put('/directors/:id', directorController.updateDirector);
app.delete('/directors/:id', directorController.deleteDirector);

// Define routes for genres
app.get('/genres', genreController.getAllGenres);
app.get('/genres/:id', genreController.getGenreById);
app.post('/genres', genreController.createGenre);
app.put('/genres/:id', genreController.updateGenre);
app.delete('/genres/:id', genreController.deleteGenre);

```

##Technologies Used
- Javascript
- Node.js
- Express
- MongoDB
- Mongoose

## Features and Requirements
- Use at least three diff erent data collections within the database (such as users, posts, or comments).
- Utilize reasonable data modeling practices.
- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
- Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
  - Note: Double-check this requirement before submission
  - Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).
- Utilize reasonable code organization practices.
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
- Commit frequently to the git repository.
- Include a README file that contains a description of your application.
- This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
- Level of effort displayed in creativity and user experience.
