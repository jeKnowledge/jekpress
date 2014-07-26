Meteor.publish('site_info', function () {
  return SiteInfo.find({ });
});

Meteor.publish('pages', function () {
  return Pages.find({ });
});
