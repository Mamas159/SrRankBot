//@ts-check
const Discord = require("discord.js");
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

client.on("presenceUpdate", (newMember) => {
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

		//remove all rank roles them add new role (messy code; fix later)
		console.log("newRole (1) = " + newRole);
		if (newRole != null && newRole != "") {
			console.log("newRole (2) = " + newRole);
			newMember.roles.remove(roleIdList)
				.then(() => {
					console.log("removed all rank roles");
					console.log(newRole);
					const roleID = roleIdList[roleList.indexOf(newRole)];


					newMember.roles.add(roleID)
						.then(() => console.log(`added to ${roleID} ${newRole}`));
				});
		}
	}
});

client.login("token here");