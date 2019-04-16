import { DataModel } from "./models/dataModel"
import { Map } from "./models/map"
import { MapTeam } from "./models/mapTeam"
import { Player } from "./models/player"
import { PlayerState } from "./models/playerState"
import { Provider } from "./models/provider"
import { Round } from "./models/round"

class EventParser {
  public parse(json: any): object {
    const map: Map = this.parseMap(json.map)
    const player: Player = this.parsePlayer(json.player)
    const provider: Provider = this.parseProvider(json.provider)
    const round: Round = this.parseRound(json.round)

    const dataModel: DataModel = {
      map,
      player,
      provider,
      round
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
      currentSpectators: map.current_spectators,
      mode: map.mode,
      name: map.name,
      numberOfMatchesToWinSeries: map.num_matches_to_win_series,
      phase: map.phase,
      round: map.round,
      souvenirsTotal: map.souvenirs_total,
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

  private parsePlayer (player: any): Player {
    if (!player) {
      return null
    }

    const playerState: PlayerState = {
      armor: player.state.armor,
      burning: player.state.burning,
      equipmentValue: player.state.equip_value,
      flashed: player.state.flashed,
      health: player.state.health,
      helmet: player.state.helmet,
      money: player.state.money,
      roundKills: player.state.round_kills,
      roundKillsWithHeadshot: player.state.round_killhs,
      smoked: player.state.smoked
    }

    return {
      activity: player.activity,
      name: player.name,
      observerSlot: player.observerSlot,
      state: playerState,
      steamId: player.steamid,
      team: player.team
    }
  }

  private parseRound(round: any): Round {
    if (!round) {
      return null
    }

    return {
      bomb: round.bomb,
      phase: round.phase,
      winningTeam: round.win_team
    }
  }
}

export default new EventParser()