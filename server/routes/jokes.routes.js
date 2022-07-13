const JokeController = require('../controllers/jokes.controller');

// Responsible for all of our routes dealing with the jokes model.

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findSingleJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
};