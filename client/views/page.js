Template.page.pageName = function () {
  return Pages.findOne({ _id: Router.current().params._id }).name;
};
