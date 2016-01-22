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

// This Add Login Fild / Create User Fild
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

// This Check if User Login and Change Layout.
Template.loginCheck.helpers({username:function(){
	if (Meteor.user()){
		return "Login As "+Meteor.user().username+" Have Fun!";
      //return Meteor.user().emails[0].address;
    }
    else {
     return "NOT Login!";
   }

    // console.log(Meteor.user().emails[0].address);   
  }
});

// This Check if User Login and Change Layout.
Template.body.helpers({username:function(){
	if (Meteor.user()){
		return Meteor.user().username;
      //return Meteor.user().emails[0].address;
    }
    else {
     return "Anonymous App User PLS Login";
   }

    // console.log(Meteor.user().emails[0].address);   
  }
});

/////
// template helpers 
/////

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({}, {sort:{counter:-1}});
	}
});

Template.comment_list.helpers({
  comment:function(){
    return Comments.find({}, {sort:{counter:-1}});
  }
});


/////
// template events 
/////
// setCounter(upCount, upCount)

Template.website_item.events({
	"click .js-upvote":function(event){

		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Up voting website with id "+website_id);


		// put the code in here to add a vote to a website!
			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){
			// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Down voting website with id "+website_id);


			// put the code in here to remove a vote from a website!
			return false;// prevent the button from reloading the page
		}
  });

Template.comment.events({
  "click .js-toggle-comment-form":function(event){
    $("#comment_item").toggle('slow');
  }, 
  "submit .js-save-comment-form":function(event){
      // here is an example of how to get the url out of the form:
      
      var comment;
      comment = event.target.comment.value;
      
      console.log("The new comment is: "+comment);
      // console.log("The url they entered is: "+createdOn)

      Comments.insert({
        comment:comment
      });

      //  put your website saving code in here! 
      return false;// stop the form submit from reloading the page
    }
  });

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){
			// here is an example of how to get the url out of the form:
			
      var title, url, description, createdOn;
      title = event.target.title.value;
      url = event.target.url.value;
      description = event.target.description.value;
      // createdOn = event.target.createdOn.new Date();
      console.log("The url they entered is: "+url)
      console.log("The url they entered is: "+title)
      console.log("The url they entered is: "+description)
      // console.log("The url they entered is: "+createdOn)

      Websites.insert({
        title:title,
        url:url,
        description:description,
        createdOn: new Date()
      });


		//  put your website saving code in here!	
			return false;// stop the form submit from reloading the page
		}
	});


  // I add meteor add matteodem:easy-search
  Template.searchBox.helpers({
    playersIndex: () => PlayersIndex
  });

 // This Add Current Time 
 Template.time.helpers({ time : new Date()});

