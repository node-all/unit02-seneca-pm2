
var seneca = require('seneca')();

seneca.use('basic').use('entity');
var emp = seneca.make('employee');

var employees_storage = function(options) {
    this.add({role: 'employee', cmd: 'add'}, function(argus, res) {
        console.log('fuck >>>>>>>>>>', argus, this);
        emp.data$(argus.data).save$(res);
        // add a new exployee
    });

    this.find({role: 'employee', cmd: 'get'}, function(argus, res) {
        emp.load$(argus.id, res);
        // get an employee by id
    });
};

seneca.use(employees_storage);
var employee = {
    name: "Rock",
    surname: "Gonzalez",
    position: 'Software Development'
};

function add_employee() {
    seneca.act({role: 'employee', cmd: 'add', data: employee}, function(err, msg) {
        console.log(msg);
    })
};

function get_employee() {
    seneca.act({role: 'employee', cmd: 'get', id: 'cdgvky'}, function(err, msg) {
        console.log(msg);
    })
};

// add_employee();
get_employee();
