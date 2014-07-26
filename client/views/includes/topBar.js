var siteInfoSub = Meteor.subscribe('site_info', function () {
  var siteInfo = SiteInfo.findOne();

  document.title = siteInfo.title;
});

Template.topBar.helpers({ siteInfoSub: siteInfoSub });

Meteor.subscribe('pages');

Template.topBar.pages = function () {
  return Pages.find().fetch();
};

Template.topBar.siteTitle = function () {
  return SiteInfo.findOne().title;
};
