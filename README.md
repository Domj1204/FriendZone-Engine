# FriendZone-Engine
A Social Network API

## Description 
MongoDB is widely favored in social networking platforms for its rapid handling of voluminous data sets and its adaptability with non-relational data structures. This project is aimed at developing an API for a social networking web service, allowing individuals to post thoughts, respond to others' posts, and manage a list of friends.

The framework of this application is built on Express.js for route management, employs a MongoDB database, and integrates the Mongoose ODM for data modeling.

## Table of Contents 
- [Walkthrough Video](#walkthrough-video)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
  
## Walkthrough Video 
Click on the following link to view a walkthrough video that highlights the usage of the application:
[Friendzone drive](https://drive.google.com/file/d/1HLnGckwzNeZBGGVq2-2IZ1ZSBLrA3mqc/view)

## Installation 
Refer to the documentation in the [MongoDB](https://www.mongodb.com/docs/manual/installation/) website for guidance on installing and setting up MongoDB. 

Use the following steps to run the application locally:
1. Clone this repository to your local machine. (For reference, visit the [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) GitHub Docs article.)
2. Run `npm i` in your CLI to download the npm package dependencies.
3. Optional: Run `npm run seed` to seed the database with the provided seed data.
4. Run `npm run start` to sync the Mongoose models to the MongoDB database and start the server.
  
## Dependencies
This project requires the following npm package dependencies:
1. [dayjs](https://day.js.org/)
2. [express](https://www.npmjs.com/package/express)
3. [jest](https://www.npmjs.com/package/jest)
4. [mongoose](https://www.npmjs.com/package/mongoose)

## Usage 

### User API Routes

Supported API: 
- `getUsers`: returns all the existing User documents in the collection 
- `getUserById`: returns a single User document by id 
- `createUser`: creates an instance of the User model using the data in req.body 
- `updateUser`: updates an existing User with the req.body
- `deleteUser`: deletes an existing User from the collection and deletes their associated Thoughts
- `addFriend`: add a new friend to a user's friend list
- `deleteFriend`: remove a friend from a user's friend list

### Thought API Routes

Available API Endpoints:
- getThoughts: Retrieves all thoughts from the database.
- getThoughtById: Fetches a single thought by its unique identifier.
- createThought: Adds a new thought to the database using the provided data.
- updateThought: Modifies an existing thought with the supplied data.
- deleteThought: Removes a thought from the database.
- addReaction: Appends a reaction to a specific thought.
- deleteReaction: Removes a reaction from a thought.


## Testing 
The utility function `format_date` is assured by a [jest](https://www.npmjs.com/package/jest) test suite. You can run these tests by executing `npm run test` in the command line interface.
API endpoints were locally verified throughout the development phase using the [Insomnia](https://docs.insomnia.rest/) REST client.  
For instructions on how to set up and test the application on your own system, please see the  [Installation](#installation) guide.

## Contributing
If you're interested in contributing to this project, please:

1. Clone the repository.
2. Commit your updates to the code.
3. Initiate a Pull Request on GitHub.
4. We will then engage in a discussion about your proposed changes and, following approval, your contributions will be merged into the project!

## License 
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This GitHub repository is licensed under the MIT license. Please refer to the license documentation [here](https://opensource.org/licenses/MIT).
  
## Questions
This project was developed by [Domj1204](https://github.com/Domj1204).  
For any related questions, please contact me via email at <jenningsdomonic@gmail.com>.
