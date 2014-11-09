Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'landingPage'});

Router.route('/stylists/:_id', {
	name: 'stylistPage',
	waitOn: function() {
	    return [
	      Meteor.subscribe('singleStylist', this.params._id),
	    ];
	},
	data: function() { return Stylists.findOne(this.params._id); }
});

