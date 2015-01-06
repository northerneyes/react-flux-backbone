var React = require('react');
var SingleInputForm = require('../../shared/components/SingleInputForm');


module.exports = React.createClass({
    onSubmit: function(value) {
        this.props.onAdd(value);
    },
    render: function() {
        return <SingleInputForm className='form-control' onSubmit={this.onSubmit} placeholder="Add a todos.." />
    }
});
