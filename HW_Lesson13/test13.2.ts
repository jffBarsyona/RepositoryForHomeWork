import {User, users} from './test13.1.js';

interface Admin extends User {
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: 'Administrator',
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: 'World saver',
        role: 'World saver'
    }
   
];