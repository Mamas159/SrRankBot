//@ts-check <- this is for vscode
const Discord = require("discord.js");
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();
const roleList = ["Entry", "Beginner", "Advanced", "Expert", "Bronze", "Silver", "Gold", "Platinum", "Diamond"];
const roleIdList = ["442973391167815680", "442973443252551681", "442973472373735424", "442973513943482389", "442973557237088265", "442973638338281492", "442973701462556672", "442973769686843392", "442973797713182721"];

const roleAnnouncementChannel = client.channels.get("442984414247518210");

client.on("ready", () => {
	console.log("I am Ready!");
});

client.on("message", (message) => {
	if (message.content.startsWith("ping")) {
		for (var i in roleList) {
			console.log(roleList[i]);
		}
	}
});

client.on("presenceUpdate", async (newMember) => {
	if (newMember.guild.id !== "442968647078510592") return;

	//log presence updates
	console.log(".");
	console.log("presence update for: " + newMember);
	console.log(newMember.presence);

	//check if game and assets is correct
	let activity = newMember.presence.activity;
	if (activity != null
		&& activity.assets != null
		&& activity.assets.smallText != null
		&& activity.name === 'SpeedRunners'
	) {

		//get rolename from smallText
		console.log("smallText = " + activity.assets.smallText);
		var newRole = activity.assets.smallText.slice(" League", -7);

		// if the user already has a role with the same name then don't do anything
		if (newMember.roles.find("name", newRole)) return;

		//remove all rank roles them add new role (messy code; fix later)
		if (newRole != null && newRole != "") {
			console.log("Role to apply: " + newRole);

			// We remove all the roles from our roleIList from the user
			await newMember.roles.remove(roleIdList);

			console.log("removed all rank roles");

			// Then we get the roleID from roleIdList using the index of
			// the roleName in our roleList
			// this only works because our id's and our names are in the same order
			// if you want better code, consider making a disctionary with the name
			// as the key and the id as the value, or whichver order you find convenient
			const roleID = roleIdList[roleList.indexOf(newRole)];

			// finally we add the roleID to the user's roles
			// if we had a discitonnary we could have simply done:
			// .add(roleDict.get(newRole)); <- here we use:
			// var roleDict: <key:roleName, value:roleID>
			await newMember.roles.add(roleID)
			console.log(`added to ${roleID} ${newRole}`);

		}
	}
});

client.login(process.env.BOT_TOKEN);