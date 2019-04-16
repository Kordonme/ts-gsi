import { Map } from "./map"
import { Player } from "./player"
import { Provider } from "./provider"

export class DataModel {
  public readonly provider: Provider
  public readonly player: Player
  public readonly map: Map
}