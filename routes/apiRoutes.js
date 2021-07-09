const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

// routing

module.exports = (app) => {
    // get requests. handles visit page.
    app.get('/api/tables', (req, res) => res.json(tableData));
    app.get('/api/waitlist', (req, res) => res.json(waitListData));

    //post requests. when user submits a form and submits data to server

    app.post('/api/tables', (req,res) => {
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    // clear out tables.

    app.post('/api/clear', (req, res) => {
        // empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};