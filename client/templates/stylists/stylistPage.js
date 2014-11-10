Template.landingPage.rendered = function(){
    $('input.phone_number').formance('format_phone_number');
};

Template.stylistPage.events({
    'click #request':function(event){
       $('#request-form').show();
       $('#request').hide();
    },

    'submit #request-form': function(e, t) {
        e.preventDefault();
        var name = t.find('#user-name').value,
            cell = t.find('#user-cell').value,
            email = t.find('#user-email').value,
            stylistRequested = t.find('#stylist-requested').value;

        if (name === '' || cell === '' || email === '') {
            alert('Please fill all fields.');
        } else {
            People.insert({
                name: name,
                cell: cell,
                email: email,
                stylistRequested: stylistRequested,
                createdAt: new Date()
            }, function(){
                $('#request-form').hide();
                $('#thanks').show();
            });

            var form = document.getElementById("user-form");
            form.reset();
        }
    }
});