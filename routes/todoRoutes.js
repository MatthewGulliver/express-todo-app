module.exports = function(app) {
    app.get('/todos', function(req, res) {
        res.send('TODO list will be here.');
    });
};