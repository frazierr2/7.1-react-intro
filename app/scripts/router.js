var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//Local Imports
var models = require('./models/image');
var form = require('./components/form.jsx').ImageImportForm;
var listing = require('./components/listing.jsx');

var AppRouter = Backbone.Router.extend({
routes: {
  '': 'index'
},
initialize: function(){
  var photos = this.photos = new models.imageCollection();
},
index: function(){

  ReactDOM.render(
    React.createElement(form, {collection: this.photos}),
    document.getElementById('app')
  );
}
});
var router = new AppRouter();
module.exports = router;
