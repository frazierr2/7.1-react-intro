var _ = require('underscore');
var React = require('react');


var ImageImportForm = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  handleClick: function(e){
    e.preventDefault();

    this.showForm = !this.showForm;
    this.forceUpdate();
  },
  render: function(){
    var display;
    if(this.showForm){
      display =(
        <div className="container">
          <div className="row well">
            <div className="form-group row">
              <div className="col-xs-12">
              <input className="form-control" type="url" value="" placeholder="Image URL" id="url-input"/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
              <textarea className="form-control" id="textArea" placeholder="Image Caption" rows="3"></textarea>
              </div>
            </div>
            <div className="text-right">
            <button className="btn">CANCEL</button>
             <button type="submit" className="btn btn-success">ADD IMAGE</button>
             </div>
          </div>
        </div>
      )
    }
    return(
      <div>
        <div className="well banner ">
          <i className="fa fa-plus-circle add-btn"onClick={this.handleClick} aria-hidden="true"></i>
        </div>
        {display}
      </div>
    );
  }
});

module.exports = {
  ImageImportForm: ImageImportForm
}
