if (Meteor.isClient) {
    Meteor.subscribe('people');
}


Template.landingpage.rendered = function(){
$('input.phone_number').formance('format_phone_number');
};

Template.landingpage.events({
    'submit #user-form': function(e, t) {
     e.preventDefault();
        var name = t.find('#user-name').value,
            cell = t.find('#user-cell').value,
            email = t.find('#user-email').value;

        if (name === '' || cell === '' || email === '') {
            alert('Please fill all fields.');
        } else {
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
    }
});