import { MapTeam } from './mapTeam'

export class Map {
  public readonly currentSpectators: number
  public readonly mode: string
  public readonly name: string
  public readonly numberOfMatchesToWinSeries: number
  public readonly phase: string
  public readonly round: number
  public readonly souvenirsTotal: number
  public readonly teamCT: MapTeam
  public readonly teamT: MapTeam
}