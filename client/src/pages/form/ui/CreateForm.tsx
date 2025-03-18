import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeInputs, validationScheme } from '../../../features/form/lib/validation'
import axios from 'axios'

export default function CreateForm() {
  const { 
    handleSubmit, 
    control,
    formState: { errors, isValid } 
  } = useForm<TypeInputs>({
    resolver: zodResolver(validationScheme),
    defaultValues: {
      title: '',
      description: '',
      status: '',
    },
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
    try {
      await axios.post('http://127.0.0.1:8080/create', data)
    } catch (e) { 
      console.error('Ошибка при отправке данных:', e)
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Controller
            control={control}
            name='title'
            render={({ field: { onChange, value } }) => (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="title"
                  className="border p-2 rounded"
                />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
              </div>
            )}
          />
        </div>
        
        <div className="mb-5">
          <Controller
            control={control}
            name='description'
            render={({ field: { onChange, value } }) => (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="description"
                  className="border p-2 rounded"
                />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
              </div>
            )}
          />            
        </div>
        
        <div className="mb-5">
          <Controller
            control={control}
            name='status'
            render={({ field: { onChange, value } }) => (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="status"
                  className="border p-2 rounded"
                />
                {errors.status && <span className="text-red-500">{errors.status.message}</span>}
              </div>
            )}
          />
        </div>

        <button disabled={!isValid} type="submit" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${!isValid ? 'opacity-50 cursor-not-allowed' : '' }`}>
          Создать
        </button>
      </form>
    </div>
  )
}