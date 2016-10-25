var _ = require('underscore');
var React = require('react');
var $ = require('jquery');

$.fn.serializeObject = function() {
   return this.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
   }, {});
 };

var ImageImportForm = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  handleClick: function(e){
    e.preventDefault();

    this.showForm = !this.showForm;
    this.forceUpdate();
  },
  formToServer: function(e){
    e.preventDefault();
    var input = $('#img-form').serializeObject();
    this.props.collection.create(input);
  return this;
  },
  render: function(){
    var display;
    if(this.showForm){
      display =(
        <div className="container">
          <div className="row well">
            <form id="img-form" onSubmit={this.formToServer}>
            <div className="form-group row">
              <div className="col-xs-12">
               <input type="URL" name="imageUrl" className="form-control" id="URL" placeholder="Image URL"/>
               </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
              <textarea className="form-control" name="caption" id="textArea" placeholder="Image Caption" rows="3"></textarea>
              </div>
            </div>
            <div className="text-right">
            <button className="btn" onClick={this.handleClick} >CANCEL</button>
             <button type="submit" className="btn btn-success">ADD IMAGE</button>
             </div>
             </form>
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
