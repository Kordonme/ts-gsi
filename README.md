
# TypeScript Game State Integration for CS:GO

A project written in TypeScript, that enables developers to easily handle events received from the GSI (Game State Integration) system used in e.g. CS:GO

## Setup GSI

To enable GSI in your local machine or server, you need to create a Game State Integration config file.
The file should be created in the `./csgo/cfg` directory of your CS:GO installation.

### Locate your Steam installation folder.

`~/.steam/steam/SteamApps/common` for Linux.
`C:\Program Files (x86)\Steam\` for Windows.

### Create a Game State Integration config file

Configuration files are named `gamestate_integration_<name>.cgf`.
If, for instance, your service is named `MyGsiService` you could name the file `gamestate_integration_mygsiservice.cgf`

Save the configuration file in the `./csgo/cfg` directory. The full path the our example configuration is now:

    # Windows
    C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg
	
	# Linux
	~/.steam/steam/SteamApps/common/Counter-Strike Global Offensive/csgo/cfg

#### Config sample

    "Test example"
    {
      "uri"  "http://localhost:3000"
      "timeout"  "5.0"
      "buffer"  "0.1"
      "throttle"  "0.1"
      "heartbeat"  "30.0"
      "auth"
      {
        "token" "supersecretauthtoken"
      }
      "data"
      {
        "map_round_wins" "1" // history of round wins
        "map" "1" // mode, map, phase, team scores
        "player_id" "1" // steamid
        "player_match_stats" "1" // scoreboard info
        "player_state" "1" // armor, flashed, equip_value, health, etc.
        "player_weapons" "1" // list of player weapons and weapon state
        "provider" "1" // info about the game providing info
        "round" "1" // round phase and the winning team    

        // Below this line must be spectating or observing
    
        "allgrenades"  "1" // grenade effecttime, lifetime, owner, position, type, velocity
        "allplayers_id"  "1" // the steam id of each player
        "allplayers_match_stats"  "1" // the scoreboard info for each player
        "allplayers_position"  "1" // player_position but for each player
        "allplayers_state"  "1" // the player_state for each player
        "allplayers_weapons"  "1" // the player_weapons for each player
        "bomb"  "1" // location of the bomb, who's carrying it, dropped or not
        "phase_countdowns" "1" // time remaining in tenths of a second, which phase
        "player_position" "1" // forward direction, position for currently spectated player
      }
    }
