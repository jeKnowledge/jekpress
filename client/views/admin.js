Template.admin.events({
    'keyup #new-page-name': function (evt, template){
        if (evt.which == 13){
            if (template.find('#new-page-name').value.length > 2){
                Meteor.call('verifyPageName', template.find('#new-page-name').value, function(err, res){
                    if (res == 0) {
                        Meteor.call('addPage', template.find("#new-page-name").value, function (err, res) {});
                        template.find("#new-page-name").value = "";
                        //Display success message
                    }
                    else{
                        //Display error message
                        console.log("It was not possible to add a new page")
                    }
                });                
            }
            else{
                //Display error message saying page name is too small
            }
        }
    }
});
