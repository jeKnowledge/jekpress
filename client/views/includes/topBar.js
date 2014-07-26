Deps.autorun(function () {
  Meteor.subscribe('site_info', function () {
    var siteInfo = SiteInfo.findOne();

    document.title = siteInfo.title;
  });

  Meteor.subscribe('pages');
});

Template.topBar.pages = function () {
  return Pages.find().fetch();
};

Template.topBar.siteTitle = function () {
  //return SiteInfo.findOne().title;
};
