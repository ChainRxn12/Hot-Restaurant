//dependencies must include path package to get correct file path for our html

const path = require('path');

//routing

module.exports = (app) => {
    // html get requests for users 'visit' page

    app.get('/tables', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
    });

    app.get('/reserve', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/reserve.html'));
    });

    //if no matching element is found default to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/home.html'));
    });
};