const { User } = require('../../models');

const userData = [
    {
        "username": 'mwilson',
        "email": 'mwilson@gmail.com'
        
    },
    {
        "username": 'cchanter',
        "email": 'christianc@gmail.com'
    },
    {
        "username": 'mike52',
        "email": 'mikejamison@outlook.com'
    },
    {
        "username": 'lutruth',
        "email": 'luthertruth@yahoo.com'
    },
    {
        "username": 'brianva73',
        "email": 'bva73@hotmail.com'
    }
];

const createUsers = async () => {
    for (const user of userData) {
        await User.create(user);
    }
}

module.exports = { createUsers };