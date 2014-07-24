Meteor.methods({
  verifyPageName: function (pageName) {
    var page = Pages.findOne({ name: pageName });
    if (page == undefined){ //Was not found
        return 0;
    }
    else{ //Was found
        return 1;
    }
  }
});
