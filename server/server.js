Meteor.startup(function () {
  var siteInfo = SiteInfo.findOne();

  if (!siteInfo) {
    SiteInfo.insert({ title: 'Set a title please' });
  }

  if (!Meteor.users.findOne({ username: 'admin' })) {
    Accounts.createUser({ username: 'admin', password: 'admin' });
  }
});
