import { Map } from "./map"
import { Player } from "./player"
import { Provider } from "./provider"
import { Round } from "./round"

export class DataModel {
  public readonly provider: Provider
  public readonly player: Player
  public readonly map: Map
  public readonly round: Round
}