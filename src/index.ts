import {serve, type HttpBindings} from '@hono/node-server'
import {Hono} from 'hono'

const app = new Hono<{ Bindings: HttpBindings }>()

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

const port = process.env.PORT || '3000'
console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port: parseInt(port)
})
