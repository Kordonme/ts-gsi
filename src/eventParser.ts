import { DataModel } from "./models/dataModel"
import { Map } from "./models/map"
import { MapTeam } from "./models/mapTeam"
import { Player } from "./models/player"
import { PlayerMatchStats } from "./models/playerMatchStats"
import { PlayerState } from "./models/playerState"
import { Provider } from "./models/provider"
import { Round } from "./models/round"

class EventParser {
  public parse (json: any): object {
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

    const playerState: PlayerState = this.parsePlayerState(player.state)
    const playerMatchStats: PlayerMatchStats = this.parsePlayerMatchStats(player.match_stats)

    return {
      activity: player.activity,
      matchStats: playerMatchStats,
      name: player.name,
      observerSlot: player.observerSlot,
      state: playerState,
      steamId: player.steamid,
      team: player.team
    }
  }

  private parsePlayerState (playerState: any): PlayerState {
    if (!playerState) {
      return null
    }

    return {
      armor: playerState.armor,
      burning: playerState.burning,
      equipmentValue: playerState.equip_value,
      flashed: playerState.flashed,
      health: playerState.health,
      helmet: playerState.helmet,
      money: playerState.money,
      roundKills: playerState.round_kills,
      roundKillsWithHeadshot: playerState.round_killhs,
      smoked: playerState.smoked
    }
  }

  private parseRound (round: any): Round {
    if (!round) {
      return null
    }

    return {
      bomb: round.bomb,
      phase: round.phase,
      winningTeam: round.win_team
    }
  }

  private parsePlayerMatchStats (playerMatchStats: any): PlayerMatchStats {
    if (!playerMatchStats) {
      return null
    }

    return {
      assists: playerMatchStats.assits,
      deaths: playerMatchStats.deaths,
      kills: playerMatchStats.kills,
      mvps: playerMatchStats.mvps,
      score: playerMatchStats.score
    }
  }
}

export default new EventParser()