Template.admin.events({
    'keyup #new-page-name': function (evt, template) {
        if (evt.which == 13){
            Meteor.call('addPage', template.find("#new-page-name").value, function (err, res) {});
            template.find("#new-page-name").value = "";
        }
    }
});
