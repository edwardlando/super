Meteor.publish('stylists', function() { 
	return Stylists.find();
});