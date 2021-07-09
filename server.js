//Dependencies
const express = require ('express');
const path = require ('path');
//  set up express app
const PORT = 3000;
const app = express();
const reservation = [
    {
        routeName: 'reservation',
        name: 'name',
        phonenumber: 'phone',
        email: 'mail',
        uniqueId: 'id',
    },
]
const waitlist = [
    {
    },
]
//Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './dist/home.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, './dist/reservation.html')));
app.post('/reservation', (req, res) => {
    const newReservation = req.body;
    reservation.push(newReservation);
    //log
    console.log(req);
    console.log(newReservation);
    res.json(newReservation);
});
//listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));