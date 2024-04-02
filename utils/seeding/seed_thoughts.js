const { User, Thought } = require('../../models');

const thoughtData = [
    "Sometimes I wonder about the stars and their stories.",
    "Do cats think about space travel?",
    "Yesterday's adventure was like a scene from a movie.",
    "If music could paint, I wonder what the colors would be like.",
    "What if our dreams are just unexplored realities?"...",
];

const userData = [
    'mwilson',
    'cchanter',
    'mike52',
    'lutruth',
    'brianva73'
];

const createThoughts = async () => {
    for (var i = 0; i < thoughtData.length; i++) {
        // Find the User by username
        const user = await User.findOne({ username: userData[i] })
            .select('-__v');
        
        // Create the Thought instance 
        const thought = await Thought.create({
            "thoughtText": thoughtData[i],
            "username": user.username,
            "userId": user._id.valueOf()
        });

        // Add the new thought to the user.thoughts array
        await User.findOneAndUpdate(
            { _id: user._id },
            { $push: { thoughts: thought._id }},
            { new: true }
        );
    }
}

module.exports = { createThoughts }