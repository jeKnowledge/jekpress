Template.signupForm.events({
  'submit #signup-form': function (event, template) {
    event.preventDefault();

    Accounts.createUser({
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),

      profile: {
        email: $('#signup-email').val()
        // Other required field values can go here
      }
    }, function (error) {
      if (error) {
        console.log('An error occurred creating an account: ' + error);
      }
    });
  }
});

Template.loginForm.events({
  'submit #login-form': function (event, template) {
    event.preventDefault();

    Meteor.loginWithPassword(
      $('#login-username').val(),
      $('#login-password').val(),

      function (error) {
        if (error) {
          consoe.log('An error occurred logging in: ' + error);
        }
      }
    );
  }
});

Template.logoutForm.events({
  'click #logout-form': function (event, template) {
    event.preventDefault();

    Meteor.logout(function (error) {
      if (error) {
        console.log('An error occurred logging out: ' + error);
      }
    });
  }
});

Template.logoutForm.userName = function () {
  return Meteor.user().username;
};
