Meteor.methods({
  addPage: function (pageName) {
    var pageSearch = Pages.findOne({ name: pageName });

    if (pageSearch) {
      throw Meteor.Error(409, 'Such page already exists');
    }

    if (!pageName) {
      throw Meteor.Error(411, 'Page name too small.');
    }

    Pages.insert({ name: pageName });
  }
});
