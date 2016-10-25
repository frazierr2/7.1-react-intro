var Backbone = require('backbone');

var Photo = Backbone.Model.extend({
  'imageUrl':'http://www.coniferousforest.com/wp-content/uploads/2016/08/American-Black-Bear-Standing.jpg',
  'caption': 'Wait, did you hear that?'
});

var ImageCollection = Backbone.Collection.extend({
  model: Photo,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/imgboard'
});

module.exports = {
  Photo: Photo,
  ImageCollection: ImageCollection
};
