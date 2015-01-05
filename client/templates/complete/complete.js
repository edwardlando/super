


Template.complete.rendered = function(){
    $('input.phone_number').formance('format_phone_number');

    var Stripe = Meteor.npmRequire('stripe')('sk_test_V3vki89jEk7AVaoovKS8qAZQ');
    
};

function createPerson() {
	People.insert({
        name: name,
        cell: cell,
        email: email,
        createdAt: new Date()
    }, function(){
        $('#user-form').hide();
        $('#thanks').show();
    });

    var form = document.getElementById("user-form");
    form.reset();
}



  

function createStripeCustomer() {
   alert("wassup stripe");

   var Stripe = Meteor.npmRequire('stripe')('sk_test_V3vki89jEk7AVaoovKS8qAZQ').done(
       Stripe.customers.create({
           email: 'ed@example.com'
       }, function (err, res) {
            err; // null if no error occured
            res; // the created customer object
       })


    );
   alert(Stripe);

  
}








Template.complete.events({
    'click #signup': function(e, t) {
     e.preventDefault();
        var firstName = t.find('#first-name').value,
            lastName = t.find('#last-name').value,
            referrerName = t.find('#referrer-name').value;
            mobileNumber = t.find('#mobile-number').value;
            email = t.find('#email').value;
            cardNumber = t.find('#card-number').value;
            cvc = t.find('#cvc').value;
            expMonth = t.find('#exp-month').value;
            expYear = t.find('#exp-year').value;
            postal = t.find('#postal').value;

        // if (firstName === '' || lastName === '' || mobileNumber === '' || email === '' || cardNumber === ''
        // 	|| cvc === '' || expMonth === '' || expYear === ''|| postal === '') {
        //     alert('Please fill all fields.');
        // } 

        // else {

        	// createStripeCustomer
        	createStripeCustomer();

        	// createPerson
        	// createPerson();

	       


        // }
    }
});

