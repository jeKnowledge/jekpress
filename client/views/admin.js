var topError = function (backgroundType, message) {
  var paragraphSelector = '#information-paragraph';
  
  $(paragraphSelector).removeClass();
  $(paragraphSelector).addClass(backgroundType);
  $(paragraphSelector).text(message);
};

Template.admin.events({
  'submit #add-page-form': function (event) {
    Meteor.call('addPage', $('#new-page-name').val(), function (err, res) {
      if (err) {
        console.log('An error occured adding a new page: ' + err);

        topError('bg-danger', err);
      } else {
        $('#new-page-name').val('');

        topError('bg-success', 'Page added successfully.');
      }
    });

    event.preventDefault();
  },
  'submit #change-title-form': function (event) {
      var newTitle = $('#new-website-title').val();
      Meteor.call('changeTitle', newTitle, function(err, res) {
          if (err) {
              console.log('An error occured: ' + err);

              topError('bg-danger', err);
          }
          else{
              $('#new-website-title').val('');

              topError('bg-success', "Title changed successfully.");

              document.title = newTitle;
          }
      });

    event.preventDefault();      
    }
});
