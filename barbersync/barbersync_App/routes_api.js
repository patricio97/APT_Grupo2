module.exports = function(app){

    app.get('/', (request, response) => {
        response.json({"mensaje":"rodo bien"});
    });

};