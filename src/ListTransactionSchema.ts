import { z } from 'zod'

const ListTransactionSchema = z.object({
  query: z.object({
    startAt: z.coerce.date(),
    endAt: z.coerce.date(),
  }),
})

export default ListTransactionSchema
