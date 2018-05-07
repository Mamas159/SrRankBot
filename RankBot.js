const Discord = require("discord.js");
const client = new Discord.Client();

const roleList = ["Entry", "Beginner", "Advanced", "Expert", "Bronze", "Silver", "Gold", "Platinum", "Diamond"]
const roleIdList = ["442973391167815680", "442973443252551681", "442973472373735424", "442973513943482389", "442973557237088265", "442973638338281492", "442973701462556672", "442973769686843392", "442973797713182721"]

const roleAnnouncementChannel = client.channels.get("442984414247518210")

client.on("ready", () => {
	console.log("I am Ready!")
});

client.on("message", (message) => {
	if(message.content.startsWith("ping")){
		for(var i in roleList){
			console.log(roleList[i])
		}
	}
});

client.on("presenceUpdate", (newMember) => {

	//log presence updates
	console.log(".")
	console.log("presence update for: " + newMember)

	//check if game and assets is correct
	if(newMember.presence.activity != null && newMember.presence.activity.assets != null && newMember.presence.activity.assets.smallText != null){
		if(newMember.presence.activity.name == "SpeedRunners"){

			//get rolename from smallText
			console.log(newMember.presence.activity.assets.smallText)
			var newRole = newMember.presence.activity.assets.smallText.slice(" League", -7)

			//var currentRole = ""


			//check if user changed role (super messy but js for loops are weird)
			/*
			if(newMember.roles.has(roleIdList[0])){
				currentRole = roleList[0]
			}
			if(newMember.roles.has(roleIdList[1])){
				currentRole = roleList[1]
			}
			if(newMember.roles.has(roleIdList[2])){
				currentRole = roleList[2]
			}
			if(newMember.roles.has(roleIdList[3])){
				currentRole = roleList[3]
			}
			if(newMember.roles.has(roleIdList[4])){
				currentRole = roleList[4]
			}
			if(newMember.roles.has(roleIdList[5])){
				currentRole = roleList[5]
			}
			if(newMember.roles.has(roleIdList[6])){
				currentRole = roleList[6]
			}
			if(newMember.roles.has(roleIdList[7])){
				currentRole = roleList[7]
			}
			if(newMember.roles.has(roleIdList[8])){
				currentRole = roleList[8]
			}
			*/


			//remove all rank roles them add new role
			
			if(newRole != null && newRole != ""){
				newMember.roles.remove(roleIdList)
				console.log("removed all rank roles")


				console.log(newRole)
				if(newRole == "Entry"){
					newMember.roles.add(roleIdList[0])
					console.log("added to " + roleIdList[0] + " " + roleList[0])
				}
				else if(newRole == "Beginner"){
					newMember.roles.add(roleIdList[1])
					console.log("added to " + roleIdList[1] + " " + roleList[1])
				}
				else if(newRole == "Advanced"){
					newMember.roles.add(roleIdList[2])
					console.log("added to " + roleIdList[2] + " " + roleList[2])
				}
				else if(newRole == "Expert"){
					newMember.roles.add(roleIdList[3])
					console.log("added to " + roleIdList[3] + " " + roleList[3])
				}
				else if(newRole == "Bronze"){
					newMember.roles.add(roleIdList[4])
					console.log("added to " + roleIdList[4] + " " + roleList[4])
				}
				else if(newRole == "Silver"){
					newMember.roles.add(roleIdList[5])
					console.log("added to " + roleIdList[5] + " " + roleList[5])
				}
				else if(newRole == "Gold"){
					newMember.roles.add(roleIdList[6])
					console.log("added to " + roleIdList[6] + " " + roleList[6])
				}
				else if(newRole == "Platinum"){
					newMember.roles.add(roleIdList[7])
					console.log("added to " + roleIdList[7] + " " + roleList[7])
				}
				else if(newRole == "Diamond"){
					newMember.roles.add(roleIdList[8])
					console.log("added to " + roleIdList[8] + " " + roleList[8])
				}
			}
			//send announcement message if user changed rank. format of "@user is now NewRank! Congrats!"
			//if(newRole != currentRole){
				//roleAnnouncementChannel.send("<@!" + newMember.id + ">" + " is now " + newRole + "! Congrats!")
			//}

		}
	}
	

});

client.login("NDE3NDA4MTIwNzQ3MzI3NTAw.Dc9_5Q.YnkmoKKqT4YYrO6uvD89dvdYckg")