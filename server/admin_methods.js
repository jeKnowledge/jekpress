Meteor.methods({
  addPage: function (pageName) {
    var pageSearch = Pages.findOne({ name: pageName });

    if (pageSearch) {
      throw new Meteor.Error(409, 'Such page already exists');
    }

    if (!pageName) {
      throw new Meteor.Error(411, 'Page name too small.');
    }

    Pages.insert({ name: pageName });
  },

  changeTitle: function (titleNew) {
    var titleSearch = SiteInfo.findOne();

    if (!titleNew) {
      throw new Meteor.Error(411, 'Title is too small.');
    }

    if (titleSearch) {
      SiteInfo.update({ _id: titleSearch._id },
                      { title : titleNew });
    } else {
      SiteInfo.insert({ title: titleNew });
    }
  }
});
