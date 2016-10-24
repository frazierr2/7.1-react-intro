var Backbone = require('backbone');

var image = Backbone.Model.extend({
  idAttributes: '_id'
});

var imageCollection = Backbone.Collection.extend({
  model: image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/imgboard'
});

module.exports = {
  image: image,
  imageCollection: imageCollection
};
