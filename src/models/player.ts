import { PlayerState } from "./playerState"

export class Player {
  public readonly activity: string
  public readonly name: string
  public readonly steamId: string
  public readonly observerSlot: number
  public readonly state: PlayerState
  public readonly team: string
}