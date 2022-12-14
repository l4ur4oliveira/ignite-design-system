import { FormEvent, useState } from "react";
import axios from 'axios';
import { Checkbox } from "../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'laura@email.com.br',
      password: '123456'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-3'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='mt-1 text-gray-400'>
          Faça login e comece a usar
        </Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col items-stretch gap-4 mt-10 w-full max-w-[400px]'>
        { isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text size='md' className='font-semibold'>
            Endereço de e-mail
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="janedoe@example.com" type="email" />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text size='md' className='font-semibold'>
            Sua senha
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="******" type="password" />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />

          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>
        
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-3 mt-8'>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
