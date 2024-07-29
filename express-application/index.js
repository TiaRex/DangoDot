require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const mongoose = require('mongoose');
const database_url = process.env.database_url;
const bcrypt = require('bcryptjs');
const usermodel = require('./schema/user');


mongoose.connect(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => console.log ('connected database')).catch((err) => console.log(err));

app.use(express.json());

app.use (cors());

app.use (express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/register', async (req, res) => {
    try {
        const {name, email, password, displayname} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new usermodel({name, email, password: hashedPassword, displayname});
        await user.save();
        res.status(200).json({userid: user._id});
    }
    catch(error){
    res.status(500).json({error: error.message});
    }
});

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await usermodel.findOne({
            email
        });
        if (!user) {
            return res.status(404).json({message: 'Invalid email'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({message: 'Invalid password'});
        }
        res.status(200).json({userid: user._id});
    }
    catch(error){
        res.status(500).json({error: error.message});
        }
});

app.get('/users', async (req, res) => {
    try {
        const users = await usermodel.find();
        res.status(200).json(users.length);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await usermodel.findByIdAndDelete(id);
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

