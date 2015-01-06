var React = require('react');
var SingleInputForm = require('../../shared/components/SingleInputForm');


module.exports = React.createClass({
    onSubmit: function(value) {
        this.props.onSearch(value);
    },

    render: function() {
        return <SingleInputForm
                    className='form-control'
                    value={this.props.value}
                    onSubmit={this.onSubmit}
                    placeholder="Search for a Flickr tag..." />
    }
});
