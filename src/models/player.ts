import { PlayerMatchStats } from "./playerMatchStats"
import { PlayerState } from "./playerState"
import { PlayerWeapon } from "./playerWeapon"

export class Player {
  public readonly activity: string
  public readonly matchStats: PlayerMatchStats
  public readonly name: string
  public readonly steamId: string
  public readonly observerSlot: number
  public readonly state: PlayerState
  public readonly team: string
  public readonly weapons: PlayerWeapon[]
}