var React = require('react');
var ImageCollection = require('../models/image').ImageCollection;
var Photo = require('../models/image').Photo;
var Form = require('./form.jsx').ImageImportForm;
var Listing = require('./listing.jsx').ImageDisplayView;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Photo();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });
    return{
      imageToEdit: false,
      collection: imageBoard,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  handleToggleForm: function(e){
    e.preventDefault();
    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  handleEdit: function(model){
    this.setState({showForm:true, imageToEdit: model})
  },
  editImage: function(model, data){
    model.set(data);
    model.save();

    this.setState({imageToEdit: false, showForm: false});
  },
  deleteImage: function(imageModel){
    imageModel.destroy();
    this.setState({collection: this.state.collection});
  },
  render: function(){
  var self = this;
  var imageList = this.state.collection.map(function(image){
    return(
      <Listing key={image.get('_id')} model={image} handleEdit={self.handleEdit} deleteImage={self.deleteImage} />
    )
  });
  return (
    <div>
      <div className="well banner ">
        <i className="fa fa-plus-circle add-btn" onClick={this.handleToggleForm} aria-hidden="true"></i>
      </div>

        <div className="container">
          <div className="row well">
            {this.state.showForm ? <Form model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/> : null}

            <div className="row">
              {imageList}
            </div>

          </div>
        </div>

    </div>
  );
}
});

module.exports = {
  AppComponent: AppComponent
}
