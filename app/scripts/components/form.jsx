var React = require('react');


var ImageImportForm = React.createClass({
  getInitialState: function(){
    return {
      url:'',
      caption:''
    };
  },
  componentWillReceiveProps: function(nextProps){
    // console.log(nextProps.model);
    if(nextProps.model){
      this.setState({
        url: nextProps.model.get('imageUrl'),
        caption: nextProps.model.get('caption')
      });
    }
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue})
  },
  handleSubmit: function(e){
    e.preventDefault();
    var newImage = {imageUrl:this.state.url, caption: this.state.caption};

    if(this.props.model){
      this.props.editImage(this.props.model, newImage);
    }else{
      this.props.addImage(newImage);
    }
    // this.props.addImage(newImage);
    this.setState({url: '', caption: ''});
  },
  render: function(){
    return(
          <form onSubmit={this.handleSubmit} id="img-form" >
            <div className="form-group row">
              <div className="col-xs-12">
               <input type="URL" name="imageUrl" onChange={this.handleUrlChange} className="form-control" id="URL" value={this.state.url} placeholder="Image URL"/>
               </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
              <textarea onChange={this.handleCaptionChange} className="form-control" name="caption" id="textArea" value={this.state.caption} placeholder="Image Caption" rows="3"></textarea>
              </div>
            </div>
            <div className="text-right">
             <button className="btn" >CANCEL</button>
             <button type="submit" className="btn btn-success">ADD IMAGE</button>
             </div>
          </form>
        );
  }
});

module.exports = {
  ImageImportForm: ImageImportForm
}
