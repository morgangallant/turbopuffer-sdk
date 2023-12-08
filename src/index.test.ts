import { test, expect } from 'vitest'
import { TurboPufferApiClient } from '.'

const client = new TurboPufferApiClient({
    token: process.env.TURBOPUFFER_KEY,
})

test('works', async () => {
    const namespace = 'test'
    const upsertRes = await client.upsertVectors({
        namespace,
        vectors: [{ id: 1, vector: [1, 2, 3], attributes: { hello: 'ciao' } }],
    })
    console.log({ upsertRes })
    const vectors = await client.listAllVectors({ namespace })
    console.log({ vectors })
    const delRes = await client.deleteNamespace({ namespace })
    console.log({ delRes })
})