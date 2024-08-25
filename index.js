const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
    const { status, userId, emailId, collegeRollNumber, numbersArray, alphabetsArray } = req.body;

    const response = {
        status: status || "Status not provided",
        userId: userId || "User ID not provided",
        emailId: emailId || "Email ID not provided",
        collegeRollNumber: collegeRollNumber || "College Roll Number not provided",
        numbersArray: numbersArray || [],
        alphabetsArray: alphabetsArray || []
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app
