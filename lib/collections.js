Websites = new Mongo.Collection("websites");
console.log("COLLECTION MSG:--> Web Sites are: "+Websites.find().count());
Comments = new Mongo.Collection("comment");
console.log("COLLECTION MSG:--> Sites Have: "+Comments.find().count());

  // let Players = new Meteor.Collection('players'),
  // PlayersIndex = new EasySearch.Index({
  //   collection: Websites,
  //   fields: ['title'],
  //   engine: new EasySearch.MongoDB()
  // });