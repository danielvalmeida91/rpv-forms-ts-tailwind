import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Input } from "./components/Input"

const regrasFormulario = z.object({
  nome: z.string().min(1, 'Campo obrigatório.').max(20, 'Máximo 20 caracteres.'),
  email: z.email('Campo obrigatório.'),
  cep: z.string().min(1, 'Campo obrigatório.'),
  rua: z.string().min(1, 'Campo obrigatório.'),
  numero: z.string().min(1, 'Campo obrigatório.'),
  bairro: z.string().min(1, 'Campo obrigatório.'),
  cidade: z.string().min(1, 'Campo obrigatório.'),
  uf: z.string().min(1, 'Campo obrigatório.').max(2, 'Utilizar sigla.')
})

type FormType = z.infer<typeof regrasFormulario>

export function App() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormType>({
    resolver: zodResolver(regrasFormulario)
  })

  function enviaFormulario(data: FormType) {
    console.log(data)
  }

  return (
    <>
      <div className="">
        <h1>Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit(enviaFormulario)} noValidate className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-12 gap-4">
            <Input
              label="Nome"
              registration={register('nome')}
              error={errors.nome}
              containerClassName="col-span-12"
            />

            <Input
              label="Email"
              type="email"
              registration={register('email')}
              error={errors.email}
            />

            <Input
              label="CEP"
              registration={register('cep')}
              error={errors.cep}
              containerClassName="col-span-12 md:col-span-3"
            />

            <Input
              label="Rua"
              registration={register('rua')}
              error={errors.rua}
              containerClassName="col-span-12 md:col-span-7"
            />

            <Input
              label="Número"
              registration={register('numero')}
              error={errors.numero}
              containerClassName="col-span-12 md:col-span-2"
            />

            <Input
              label="Bairro"
              registration={register('bairro')}
              error={errors.bairro}
              containerClassName="col-span-12 md:col-span-4"
            />

            <Input
              label="Cidade"
              registration={register('cidade')}
              error={errors.cidade}
              containerClassName="col-span-12 md:col-span-4"
            />

            <Input
              label="UF"
              registration={register('uf')}
              error={errors.uf}
              containerClassName="col-span-12 md:col-span-4"
            />
          </div>

          <div className="flex gap-4 mt-6 justify-end">
            <button
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium"
              type="reset"
            >
              Limpar
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}