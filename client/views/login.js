//Validate Email Function

function validateEmail (email) {
  var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return filter.test(email);
}

//Template Code

Template.signupForm.events({
  "submit #signup-form": function (event, template) {
    event.preventDefault();
    if (template.find("#signup-username").value.length < 4 || template.find("#signup-password").value.length < 6 || !validateEmail(template.find("#signup-email").value)) {
      console.log("One or more parameters are invalid");
    }
    else{
      Accounts.createUser({
        username: template.find("#signup-username").value,
        password: template.find("#signup-password").value,
        profile: {
          email: template.find("#signup-email").value
          // Other required field values can go here
        }
      }, function (error) {
        if (error) {
          console.log("Error when creating account: " + error);
        }
      });
    }
  }
});

Template.loginForm.events({
  "submit #login-form": function (event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function (error) {
        if (error) {
          consoe.log("Error during logging in: " + error);
        }
      }
      );
  }
});

Template.logoutForm.events({
  "click #logout-form": function (event, template) {
    event.preventDefault();
    Meteor.logout(function (error) {
      if (error) {
        console.log("Can not logout: " + error);
      }
    });
  }
});

Template.logoutForm.userName = function () {
  Meteor.user().name;
};
