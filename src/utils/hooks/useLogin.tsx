'use client';
import { useEffect, useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IHttpClient } from '@/types/httpClient';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';

interface ILoginComponentProps {
  client: IHttpClient;
}

export function useLogin({ client }: ILoginComponentProps) {
  const router = useRouter();

  const [remember, setRemember] = useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const schema = z.object({
    login: z.string({
      message: 'Valor inválido',
      required_error: 'Campo obrigatório',
    }),
    password: z.string({
      message: 'Valor inválido',
      required_error: 'Campo obrigatório',
    }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(user: typeof schema._type) {
    try {
      if (remember) {
        window.localStorage.setItem('rememberedUsername', user.login);
        window.localStorage.setItem('rememberedPassword', user.password);
      } else {
        window.localStorage.removeItem('rememberedUsername');
        window.localStorage.removeItem('rememberedPassword');
      }
      const { data, statusCode } = await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
        method: 'post',
        body: user,
      });

      if (statusCode === 200) {
        window.localStorage.setItem('token', data.data);
        router.push('/dashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao fazer login',
          text: 'Usuário ou senha inválidos',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao fazer login',
        text: 'Ocorreu um erro ao fazer login, tente novamente mais tarde',
      });
    }
  }

  useEffect(() => {
    const rememberedUsername =
      window.localStorage.getItem('rememberedUsername');
    const rememberedPassword =
      window.localStorage.getItem('rememberedPassword');
    if (rememberedUsername) {
      setValue('login', rememberedUsername);
      setValue('password', rememberedPassword);
      setRemember(true);
    }
  }, [setValue]);

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    handleLogin,
    remember,
    setRemember,
    label,
  };
}
