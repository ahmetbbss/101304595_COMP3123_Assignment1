const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

const userRoute = require('./routes/user_route');
const employeeRoute = require('./routes/employee_route');



const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://ahmetbuyukbas:Yozgatlim38@cluster0.edf73am.mongodb.net/register?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/v1/user', userRoute);
app.use('/api/v1/emp', employeeRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
