import { DataModel } from "./models/dataModel"
import { Map } from "./models/map"
import { MapTeam } from "./models/mapTeam"
import { Provider } from "./models/provider"

class EventParser {
  public parse(json: any): object {
    const map: Map = this.parseMap(json.map)
    const provider: Provider = this.parseProvider(json.provider)

    const dataModel: DataModel = {
      map,
      provider,
    }

    return dataModel
  }

  private parseProvider (provider: any): Provider {
    return {
      appId: provider.appid,
      name: provider.name,
      steamId: provider.steamid,
      timestamp: provider.timestamp,
      version: provider.version
    }
  }

  private parseMap (map: any): Map {
    if (!map) {
      return null
    }

    const mapTeamCT: MapTeam = this.parseTeam(map.team_ct)
    const mapTeamT: MapTeam = this.parseTeam(map.team_t)

    return {
      name: map.name,
      phase: map.phase,
      round: map.round,
      teamCT: mapTeamCT,
      teamT: mapTeamT
    }
  }

  private parseTeam (team: any): MapTeam {
    if (!team) {
      return null
    }

    return {
      consecutiveRoundLosses: team.consecutive_round_losses,
      matchesWonThisSeries: team.matches_won_this_series,
      name: team.name,
      score: team.score,
      timeoutsRemaining: team.timeouts_remaining
    }
  }
}

export default new EventParser()