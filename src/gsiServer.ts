import * as express from 'express'
import { EventEmitter } from './eventEmitter'
import eventParser from './eventParser'

export class GsiServer extends EventEmitter {
  private expressApp: express.Express

  private port: number
  private baseUrl: string

  constructor ()
  constructor (options: GsiServer = {} as any as GsiServer) {
    super()

    this.expressApp = express()
    this.expressApp.use(express.json())

    const {
      port = 3000,
      baseUrl = '/'
    } = options

    this.port = port
    this.baseUrl = baseUrl

    this.mountRoutes()
  }

  public start (): void {
    this.expressApp.listen(this.port)
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.post(this.baseUrl, (req, res) => {
      const eventObject = eventParser.parse(req.body)
      this.emit('all', eventObject)
      res.end()
    })
    
    this.expressApp.use('/', router)
  }
}
