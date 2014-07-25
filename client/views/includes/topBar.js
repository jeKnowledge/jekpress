Template.topBar.title = function () {
  var info =  Site_info.findOne();

  if (info){
      return info.title;
  }
  else{
    return 'Set a title please';
  }
};

Template.topBar.pages = function () {
    return Pages.find().fetch();
};

Template.topBar.rendered = function () {
    //Still needs a fix can't access db
    var info =  Site_info.findOne();

    console.log("info: "+info);

    if (info){
        document.title = info.title;
    }
    else{
        document.title = 'Set a title please';
    }
};
