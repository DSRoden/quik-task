'use strict';

function Priority(o){
  this.name = o.name;
  this.color = o.color;
}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorities');}
});

Priority.create = function(o, cb){
  var p = new Priority(o);
  Priority.collection.save(p, cb);
};

module.exports = Priority;
