var React = require('react');
var storeMixin = require('../../shared/helpers/storeMixin');
var RouterStore = require('../RouterStore');


module.exports = React.createClass({
    mixins: [storeMixin(RouterStore)],

    getInitialState: function() {
        return { RouterStore: RouterStore };
    },

    getComponentClass: function(route) {
        switch (route) {
            case 'help':
                return require('../../app/components/Help');

            case 'flickr':
                return require('../../flickr/components/Flickr');

            case 'todos':
            default:
                return require('../../todos/components/Todos');
        }
    },

    render: function() {
        var props = {
            route: this.state.RouterStore.get('route'),
            routeParams: this.state.RouterStore.get('params')
        };

        var Component = this.getComponentClass(props.route);
        return <Component {...props} />;
    }
});
