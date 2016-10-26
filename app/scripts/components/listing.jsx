var React = require('react');


var ImageDisplayView = React.createClass({
  handleEdit: function(e){
    this.props.handleEdit(this.props.model);
  },
  handleRemove: function(e){
    this.props.deleteImage(this.props.model);
  },
  render: function(){
    var imageSrc = this.props.model.get('imageUrl');
    var imageCaption = this.props.model.get('caption');

    return(
      <div className="col-sm-8 col-sm-offset-2">
        <div className="thumbnail">
          <img src={imageSrc} />
          <div className="caption">
            <p>{imageCaption}</p>
            <p><a href="#" onClick={this.handleEdit} className="btn btn-primary" role="button">Edit</a> <a href="#" className="btn btn-default" onClick={this.handleRemove} role="button">Remove</a></p>
          </div>
        </div>
      </div>
  )
  }

});


module.exports = {
  ImageDisplayView: ImageDisplayView
}
