'use strict';

var Priority = require('../models/priority');

exports.create = function(req, res){
  Priority.create(req.body, function(err, priority){
    res.send({priority:priority});
  });
};

