var Backbone = require('backbone');

var Photo = Backbone.Model.extend({
  defaults: {
  'imageUrl':'',
  'caption': ''
},
idAttribute: '_id'
});

var ImageCollection = Backbone.Collection.extend({
  model: Photo,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/imgboard'
});

module.exports = {
  Photo: Photo,
  ImageCollection: ImageCollection
};
