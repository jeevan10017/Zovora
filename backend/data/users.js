import bcrypt from 'bcrypt';

const users = [
    { name: 'AdminUser',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    { name: 'Jeevan',
        email: 'jeevan@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    { name: 'Chintu',
        email: 'chintu@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;