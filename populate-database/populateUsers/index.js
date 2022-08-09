/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import fetch from 'node-fetch';

const UserData = [
    {
        fullName: "Admin One",
        username: "admin_one",
        email: "admin_one@example.com",
        password: "admin_one_password",
        phoneNumber: "8989898989",
        role: "admin"
    },
    {
        fullName: "Admin Two",
        username: "admin_two",
        email: "admin_two@example.com",
        password: "admin_two_password",
        phoneNumber: "8989898989",
        role: "admin"
    },
    {
        fullName: "John Doe",
        username: "john_doe",
        email: "john_doe@example.com",
        password: "john_doe_password",
        phoneNumber: "8989898989",
    },
    {
        fullName: "Jane Doe",
        username: "jane_doe",
        email: "jane_doe@example.com",
        password: "jane_doe_password",
        phoneNumber: "8989898989",
    }
]

const populateUsers = async () => {
    for (let i in UserData) {
        try {
            const response = await fetch(
                'http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(UserData[i]),
                headers: {'Content-Type': 'application/json'}
            }
            )
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
        
    }
}

populateUsers();