Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('stylists'); }
  
});

Router.route('/', {name: 'landingPage'});

Router.route('/stylists/:_id', {
	name: 'stylistPage',
	data: function() { return Stylists.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'stylistPage'});

