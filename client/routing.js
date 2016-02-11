// routing

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('welcome', {
    to:"welcome"
  });
  this.render('loginCheck', {
    to:"head"
  });
  this.render('website_list', {
    to:"main"
  });
  this.render('time', {
    to:"footer"
  });
});

Router.route('/addsite', function () {
 this.render('navbar', {
  to:"navbar"
});
 this.render('welcome', {
  to:"welcome"
});
 this.render('addSite', {
  to:"head"
});
 this.render('website_form', {
  to:"main"
});
 this.render('time', {
  to:"footer"
});
});

Router.route('/about', function () {
 this.render('navbar', {
  to:"navbar"
});
 this.render('welcome', {
  to:"welcome"
});
 this.render('aboutPage', {
  to:"head"
});
 this.render('comment', {
  to:"main"
});
 this.render('time', {
  to:"footer"
});
});

Router.route('/aboutMe', function () {
 this.render('navbar', {
  to:"navbar"
});
 this.render('welcome', {
  to:"welcome"
});
 this.render('contact', {
  to:"head"
});
 this.render('contacts', {
  to:"main"
});
 this.render('time', {
  to:"footer"
});
});