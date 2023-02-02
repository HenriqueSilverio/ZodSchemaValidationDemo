import { z } from 'zod'

const AddNewTransactionSchema = z.object({
  body: z.object({
    accountID: z.string().trim().uuid(),
    description: z.string().trim(),
    amount: z.number().positive(),
    dueDate: z.coerce.date(),
  }),
})

export default AddNewTransactionSchema
