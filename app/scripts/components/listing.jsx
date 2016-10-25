var _ = require('underscore');
var React = require('react');



var ImageDisplayView = React.createClass({
  render: function(){
    var imageGroup = this.props.collection.map(function(model){
      return(
        <div key={model.get('_id')}>
          <img src={model.get('imageURL')}/>
          <p>
            {model.get('caption')}
          </p>
        </div>
      )
    });
    console.log(imageGroup);
    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          {imageGroup}
        </div>
      </div>
    )
  }
});

module.exports = {
  ImageDisplayView: ImageDisplayView
}
