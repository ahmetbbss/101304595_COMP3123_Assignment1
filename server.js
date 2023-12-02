const express = require('express');
const app = express();
const port = 8001; 

const userRoute = require('./routes/user_route');
const employeeRoute = require('./routes/employee_route');

const cors = require('cors');
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true
  }
));

const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://ahmetbuyukbas:Yozgatlim38@cluster0.edf73am.mongodb.net/register?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to COMP3123_Assignment1, written by 101304595 (Ahmet Buyukbas)');
});

app.use('/api/v1/user', userRoute);
app.use('/api/v1/emp', employeeRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
