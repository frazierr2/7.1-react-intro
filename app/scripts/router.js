var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//Local Imports
var models = require('./models/image');
var form = require('./components/form.jsx');
var listing = require('./components/listing.jsx');

var AppRouter = Backbone.Router.extend({

});
var router = new AppRouter();
module.exports = router;
