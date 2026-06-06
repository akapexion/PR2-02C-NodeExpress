import dbConnect from "../config/dbConfig.js";
import user from "../models/usersSchema.js";

dbConnect();

const createUser = async() => {
    try{
        await user.insertOne(
            {
                user_name : "Farooq",
                user_message : "Web Developer",
                user_age : 25
            }
        );
        console.log("Data Inserted Successfully");
    }
    catch(err){
        console.log(err);
    }
}

// createUser();

const getUsers = async() => {
    try{
        const users = await user.find();
        console.log("All users: ", users);
    }
    catch(err){
        console.log(err);
    }
}

getUsers();





