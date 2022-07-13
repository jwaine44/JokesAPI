const Joke = require('../models/jokes.model');

// In our controller file, we export different functions that perform the basic CRUD operations using our User model.
// the .then() will only execute upon successfully inserting data in the database
// the .catch() will execute only if there is an error.

// Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Export a function to get a single joke
module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({joke: singleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Export a function to create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong,", error: err }));
};

// Export a function to update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Export a function to delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};