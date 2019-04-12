export class EventEmitter {
  private listeners = {}

  public on(eventName: string, fn: (...args: any[]) => void) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)
    return this
  }

  public once(eventName: string, fn: (...args: any[]) => void) {
    this.listeners[eventName] = this.listeners[eventName] || []
    const onceWrapper = () => {
      fn()
      this.off(eventName, onceWrapper)
    }
    this.listeners[eventName].push(onceWrapper)
    return this
  }

  public off(eventName: string, fn: (...args: any[]) => void) {
    const lis = this.listeners[eventName]

    if (!lis) {
      return this
    }

    for (let i = lis.length; i > 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i, 1)
        break
      }
    }
    return this
  }

  public emit(eventName: string, ...args: any[]) {
    const functions = this.listeners[eventName]

    if (!functions) {
      return false
    }

    functions.forEach((fn: (...args: any[]) => void) => {
      fn(...args)
    })
    return true
  }

  public listenerCount(eventName: string) {
    const functions = this.listeners[eventName] || []
    return functions.length
  }

  public rawListeners(eventName: string) {
    return this.listeners[eventName]
  }
}
