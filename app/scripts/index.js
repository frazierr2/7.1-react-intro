// 3rd Party Imports
var $ = require('jquery');
var Backbone = require('backbone');


// Local Imports
require('./router');


$(function(){
  Backbone.history.start();
});
