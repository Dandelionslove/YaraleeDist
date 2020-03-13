const express = require('express')
const history = require('connect-history-api-fallback')
const env = process.env.NODE_ENV || 'development'

const path = require('path')
const app = express()

app.use(history())

if (env !== 'development') {
  app.use(express.static(path.join(__dirname, 'dist/deploy')))
}

// 错误处理
app.use((err, req, res, next) => {
  res.status(442).send({ error: err.message })
})

const server = app.listen(8086, () => {
  console.log(`Express started in ${app.get('env')} mode on http://127.0.0.1:8080`)
})