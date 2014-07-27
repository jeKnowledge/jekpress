Router.map(function () {
  this.route('home', { path: '/' });
  this.route('admin', { path: '/admin' });

  this.route('page', {
    path: '/page/:name'
  });
});
