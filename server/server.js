Meteor.startup(function () {
  var siteInfo = SiteInfo.findOne();

  if (!siteInfo) {
    SiteInfo.insert({ title: 'Set a title please' });
  }
});
