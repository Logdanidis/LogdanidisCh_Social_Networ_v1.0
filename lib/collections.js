Websites = new Mongo.Collection("websites");
console.log("COLLECTION MSG:--> Web Sites are: "+Websites.find().count());
Comments = new Mongo.Collection("comment");
console.log("COLLECTION MSG:--> Sites Have: "+Comments.find().count());

// ste up security
// I Remove "insecure" Pack
Websites.allow({
	insert:function(userId, doc){
		console.log("security is On");
		if (Meteor.user()){
			doc.createBy = userId;
			if (userId != doc.createBy){
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
	}
})

Comments.allow({
	insert:function(userId, doc){
		console.log("security is On");
		if (Meteor.user()){
			doc.createBy = userId;
			if (userId != doc.createBy){
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
	}
})