Websites = new Mongo.Collection("websites");
console.log("COLLECTION MSG:--> Web Sites are: "+Websites.find().count());
NewSite = new Mongo.Collection("newSite");
console.log("COLLECTION MSG:--> New Sites are: "+NewSite.find().count());