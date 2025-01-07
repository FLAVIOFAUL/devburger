import express from 'express'
import routes from './routes'

class App {
    construtor() {
        this.app = express()

        this.middlewares()
        this.routes()
    }

   middlewares() {
        this.app.use(express.json())
   }

   routes() {
      this.app.use(express.json())
   }
}

export default  new App().app