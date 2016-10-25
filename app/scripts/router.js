var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//Local Imports
var models = require('./models/image');
var form = require('./components/form.jsx').ImageImportForm;
var listing = require('./components/listing.jsx').ImageDisplayView;

var AppRouter = Backbone.Router.extend({
routes: {
  '': 'index'
},
initialize: function(){
  var photos = this.photos = new models.ImageCollection();
  photos.fetch();
  // console.log(this.photos);
},
index: function(){

  ReactDOM.render(
    React.createElement(form, {collection: this.photos}),
    document.getElementById('app')
  );
  ReactDOM.render(
    React.createElement(listing, {collection: this.photos}),
    document.getElementById('images')
  );
}
});
var router = new AppRouter();
module.exports = router;
