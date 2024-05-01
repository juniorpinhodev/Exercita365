import { useForm } from "react-hook-form";

function SearchCEP() {
  const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm({defaultValues: {
    nome: "",
    email: "",
  }})

  const handleCreateUser = async (data) => {
    console.log(data)
  }

  const buscarCep = () => {

    let cep = getValues('cep')

    if(!!cep && cep.length == 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(data => {

        setValue('bairro', data.bairro)
        setValue('logradouro', data.logradouro)
        setValue('estado', data.uf)
        setValue('cidade', data.localidade)
      })
      .catch(err => console.log(err))
    }
  }
  return ( 
    <form style={{display: "flex", flexWrap: "wrap"}}
     action="" onSubmit={handleSubmit(handleCreateUser)}>
      <input 
        type="text" 
        name="nome" 
        placeholder="nome" 
        {...register('nome')}
      />
      {errors.nome && <span>{errors.nome.message}</span>}
      <input type="email" name="email" placeholder="email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}






      <input 
        type="text" 
        name="cep" 
        {...register('cep', {
          required: true,
          onBlur: () => buscarCep()
        })} 
      
      placeholder="CEP"/>
      {errors.cep && <span>{errors.cep.message}</span>}







      <input type="text" name="logradouro" placeholder="Logradouro" {...register('logradouro')}/>
      {errors.logradouro && <span>{errors.logradouro.message}</span>}
      <input type="text" name="numero" placeholder="Número" {...register('numero')}/>
      {errors.numero && <span>{errors.numero.message}</span>}
      <input type="text" name="complemento" placeholder="Complemento" {...register('complemento')}/>
      {errors.complemento && <span>{errors.complemento.message}</span>}
      <input type="text" name="bairro" placeholder="Bairro" {...register('bairro')}/>
      {errors.bairro && <span>{errors.bairro.message}</span>}
      <input type="text" name="cidade" placeholder="Cidade" {...register('cidade')}/>
      {errors.cidade && <span>{errors.cidade.message}</span>}
      <input type="text" name="estado" placeholder="Estado" {...register('estado')}/>
      {errors.estado && <span>{errors.estado.message}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default SearchCEP;