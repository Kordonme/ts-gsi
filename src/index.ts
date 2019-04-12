import { GsiServer } from './gsiServer'

const tsGsiServer = new GsiServer()

tsGsiServer.start()

tsGsiServer.on('all', data => {
  // all events are available here
})