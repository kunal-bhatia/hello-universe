const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Universe!!');
});

app.listen(9000, () => {
    console.log(`Server started on port 9000`);
});
