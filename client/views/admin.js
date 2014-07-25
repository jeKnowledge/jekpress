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

        topError('bg-danger', err);
      } else {
        $('#new-page-name').val('');

        topError('bg-success', 'Página inserida com sucesso.');
      }
    });

    event.preventDefault();
  }
});
