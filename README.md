# Work Breakdown Structure

*Ethan M, Paden L, Jack K, Ryan R*

  

# General Requirements

- Text based
- Adventure
- Move mechanics up/down/right/left
- ONE GAME
- ASCII based
- No items/equipment
- Definitive End Game State (Game Over/ Game Win)

# -Nim (M)
- Screens (M)
	- Character Select (M)
	- Puzzle (M)
	- Art (W)
	- Dialogue (M)
- Puzzle Logic (M)
	- Generation (S)
	- Interactive (M)
- Paths (M)
	- Next Area (M)
	- End (M)
	- Fail (M)
- Character (M)
	- Select (M)
		- Skills (C)

# -Nim (iteration 2)
Game will switch from MineSweeper to a console 
adventure emulator..

### Updated Road Map
![the UML didn't load right ;/](https://github.com/RatRyan/negative-nim/blob/main/road-map.png)

### Updated Plan
- Screens
	- Character select (M)
	- Puzzle (M)
	- Art (W)
	- Dialogue (M)
	- Reset Screen with 'x' (M)
	- terminal emulator (M)
- Puzzle Logic (M)
	- NimGame (S)
		- Selectable number of objects to remove or "nim"
    		- NPC follows up after a delay for visual effect when it nims objects
      		- User nims 1 - NPC nims 3, user nims 2 - npc nims 2, user nims 3 - npm nims 1 
	- FireGame (C)
		- Clickable flames
			- disappear after click
		- after flames are gone goes to win
			- if runs out of time, lose game
- Paths / Walkthrough
	- Select character (M)
		- Allows user to: 
			- select a character
			- enter name
	- Main Game (M)
		- allow the user to:
			- continue through the paths
			- slight error handling
			- clear terminal (w)
	- Game Over (M)
		- Display win or lose
			- aswell as the dialogue of the win/lose screen
 
### Issues
Main issue is the reduction of scope within the first week. We orignally planned to build minesweeper stuff, but instead we reduced scope down to build nim instead
There were also slight issues with web frameworks, cause they can often be finicky but not too terribly bad

### Tests
- main game can be imported 
- char composable is imported properly
- heres the tests we had
