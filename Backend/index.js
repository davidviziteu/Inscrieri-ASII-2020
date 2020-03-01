
const mongoose = require('mongoose');
const { Schema } = require('mongoose')

mongoose.connect(
    "mongodb+srv://andrei_david7:t7dr4DxfKFF9Hi6@cluster0-ikqim.mongodb.net/test",
    {
        useNewUrlParser: true
    }
)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: Number,
        required: true
    },
    aboutYourDep: {
        type: String,
        required: true
    },
    chosenDep: {
        type: Array,
        required: true
    },
    hoursPerWeek: {
        type: String,
        required: true
    }
})


const userModel = mongoose.model('users', userSchema);

//pt middleware
//returneaza un promise ~true daca s-a pus json ul in db, 
//false daca nu
async function register(obj) {
    try {
        const db = mongoose.connection;
        // compile schema to model
        // a document instance
        let usr = new userModel(obj);

        await usr.save();

        console.log(obj)

    } catch (error) {
        console.log(error);
        return error;
    }
}

var exampleAdmission = {
    "name": "Chelariu Rares",
    "email": "rares@hotmail.com",
    "phoneNo": "0712345678",
    "faculty": "CS UAIC",
    "yearOfStudy": 2,
    "aboutYourDep": "im lovin it",
    "chosenDep": ["IT", "RE"],
    "hoursPerWeek": 5
}

register(exampleAdmission)