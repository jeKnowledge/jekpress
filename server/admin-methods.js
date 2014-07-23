Meteor.methods({
  addPage: function (pageName) {
    Pages.insert({ name: pageName });
  }
});
