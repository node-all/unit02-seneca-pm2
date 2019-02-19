const seneca = require('seneca')();

module.exports = function(options) {
  this.add({role: 'employee', cmd: 'add'}, function(argus, res) {
    console.log('fuck >>>>>>>>>>', argus, this);
    this.make('employee').data$(argus.data).save$(res);
    // add a new exployee
  });

  this.find({role: 'employee', cmd: 'get'}, function(argus, res) {
    this.make('employee').load$(argus.id, res);
    // get an employee by id
  })
}
