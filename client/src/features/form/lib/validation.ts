import { z } from 'zod'

export const validationScheme = z.object({
  title: z.string().min(1, 'Обязательное поле').max(50, 'Не более 50 символов'),
  description: z.string().min(1, 'Обязательное поле').max(255, 'Не более 255 символов'),
  status: z.string().min(1, 'Обязательное поле').max(10, 'Не более 10 символов'),
})

export type TypeInputs = z.infer<typeof validationScheme>