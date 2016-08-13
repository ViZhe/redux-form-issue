
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack/webpack.config.client'


const server = new Express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'


const compiler = webpack(config)
server.use(webpackDevMiddleware(compiler, {
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}))
server.use(webpackHotMiddleware(compiler))

server.get('*', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" >
      </head>
      <body>
        <div id="root"></div>
        <script src="/vendor.js"></script>
        <script async src="/main.js" ></script>
      </body>
    </html>
  `)
})

const httpServer = server.listen(port, host, () =>
  console.info(`
######### (╮°-°)╮┳━━┳ #########

# ==> Server was started.
# ==> Link: http://${host}:${port}

######### ( ╯°□°)╯ ┻━━┻ #########
`)
)
