import { MapTeam } from './mapTeam'

export class Map {
  public readonly name: string
  public readonly phase: string
  public readonly round: number
  public readonly teamCT: MapTeam
  public readonly teamT: MapTeam
}