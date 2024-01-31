export function useArea() {
	type Area = {
		name: string;
		dialogue: string;
		actions: string[];
		image: string;
	};
	const areas: Area[] = [
		{
			name: "forest",
			dialogue: `You wake up to find yourself lying on the damp forest floor. The canopy overhead filters the sunlight, casting dappled shadows on the ground. The air is thick with the scent of pine and earth. You have no memory of how you got here or where you are. As you stand up, you notice a narrow path winding its way through the trees. The forest seems both mysterious and inviting. You realize that your only choice is to venture forth and discover what lies ahead. (type 'town' to continue)`,
			actions: ["town"],
			image: "/forest.png",
		},
		{
			name: "town",
			dialogue:
				"finally, after hours of walking you come up upon a small town. Do you want to go to the tavern, or continue through the city? (type 'tavern' or 'city' to continue)",
			actions: ["tavern", "city"],
			image: "/town.png",
		},
		{
			name: "tavern",
			dialogue:
				"You find that there is a group at a table glaring at you and talking between themselves, as that goes on the bartender is always extending a hearty hello towards you as you enter. (type 'conflict' or 'bar' to continue)",
			actions: ["conflict", "bar"],
			image: "/tavern.png",
		},
		{
			name: "conflict",
			dialogue:
				"The group sees you approaching and all get up and start heading towards you. You look back at the door and debate running but its too late... (type 'lose' to continue)",
			actions: ["lose"],
			image: "/brawl.png",
		},
		{
			name: "bar",
			dialogue:
				"As you go to sit down the bar keeper come to you and offers you a drink if you can win in a game of Nim. (type 'nim' or 'leave' to continue)",
			actions: ["nim", "leave"],
			image: "/tavern.png",
		},
		{
			name: "nim",
			dialogue:
				"You sit down and the bar keeper explains the rules of the game. You are given 12 matches and the goal is to not be the one to take the last match. You can take 1, 2, or 3 matches at a time. (type 'win' or 'lose' to continue)",
			actions: ["win", "lose"],
			image: "nimGame",
		},
		{
			name: "leave",
			dialogue:
				"You leave the bar and continue on your journey through the town. (type 'city' to continue)",
			actions: ["city"],
			image: "/town.png",
		},
		{
			name: "city",
			dialogue:
				"Walking through the town the air is filled with the smell of fresh bread being backed and blue skies, but just as you get towards the outskirts of the town you hear a feint cry for help... (type 'investigate' or  to continue)",
			actions: ["ignore", "investigate"],
			image: "/town.png",
		},
		{
			name: "ignore",
			dialogue:
				"You decide to continue on the path of no resistance and remain blissfully ignorant of the screams and will never findout for you will just keep walking for eternity.That is what you did from birth and will continue to do until death. (type 'win' to continue)",
			actions: ["win"],
			image: "/town.png",
		},
		{
			name: "investigate",
			dialogue:
				"Wanting to help to help whoever might be in danger you decide to go and investigate the soundsand see a cottage on fire! (type 'fire' to continue)",
			actions: ["fire"],
			image: "/house-fire.png",
		},
		{
			// Fire Game
			name: "fire",

			// Temp until fire is set
			dialogue: " Two trains are on the same track a distance 100 km apart heading towards one another, each at a speed of 50 km/h. A fly starting out at the front of one train, flies towards the other at a speed of 75 km/h. Upon reaching the other train, the fly turns around and continues towards the first train. How many kilometers does the fly travel before getting squashed in the collision of the two trains? (type answer to continue)",
			actions: ["75"]
			
			// dialogue: "Put out all the fires! (click them to put them out)",
			// actions: ["win", "lose"],
			image: "fireGame",
		},
		{
			name: "win",
			dialogue: "You win! CONGRATULATIONS!",
			actions: [],
			image: "/town.png",
		},
		{
			name: "lose",
			dialogue: "You lose! Get good!",
			actions: [],
			image: "/house-fire.png",
		},
	];

	const currentArea = useState<Area>("currentArea", () => areas[0]);

	function enterArea(areaName: string) {
		if (currentArea.value.actions.includes(areaName)) {
			const area = areas.find((a) => a.name === areaName);
			if (area) {
				currentArea.value.name = area.name;
				currentArea.value.dialogue = area.dialogue;
				currentArea.value.actions = area.actions;
				currentArea.value.image = area.image;
			}
		}
	}

	function resetArea() {
		currentArea.value = areas[0];
	}

	return {
		currentArea,
		enterArea,
		resetArea,
	};
}
