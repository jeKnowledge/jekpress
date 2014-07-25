var topError = function (backgroundType, message) {
  var paragraphSelector = '#information-paragraph';
  
  $(paragraphSelector).removeClass();
  $(paragraphSelector).addClass(backgroundType);
  $(paragraphSelector).text(message);
};

Template.admin.events({
  'submit form': function (event) {
    Meteor.call('addPage', $('#new-page-name').val(), function (err, res) {
      if (err) {
        console.log('An error occured adding a new page: ' + err);

        $('#information-paragraph').addClass('bg-danger');
        $('#information-paragraph').text(err);
      } else {
        $('#new-page-name').val('');

        $('#information-paragraph').addClass('bg-success');
        $('#information-paragraph').text('New page succesfully added');
      }
    });

    event.preventDefault();
  }
});
