import { z } from 'zod'

const ShowTransactionSchema = z.object({
  params: z.object({
    transactionID: z.string().trim().uuid(),
  }),
})

export default ShowTransactionSchema
