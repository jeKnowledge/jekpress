Template.admin.events({
  'click #new-page-btn': function () {
    Meteor.call('addPage', $('#new-page-name').val(), function (err, res) {
      
    });
  }
});
