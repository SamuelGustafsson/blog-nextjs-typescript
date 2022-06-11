import Router from 'next/router';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import {
  ButtonSection,
  Container,
  FieldSet,
  Form,
  Header,
  Input,
  InputContainer,
  InputErrorMessage,
  Textarea,
} from '@/components/Form';
import { validationRules } from '@/constants/post';
import { useBlog } from '@/contexts/BlogContext';

import { Post } from '../types';

type FormData = {
  heading: string;
  preamble: string;
  text: string;
  name: string;
  email: string;
};

const handleOnClickCancel = () => {
  Router.back();
};

export default function PostFormAdd() {
  const { heading, preamble, author } = validationRules;
  const { addPost } = useBlog();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = ({ heading, preamble, text, name, email }: FormData) => {
    const postToBeAdded: Post = {
      heading,
      preamble,
      text,
      author: {
        name,
        email,
      },
    };
    addPost(postToBeAdded);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>Skapa inlägg</Header>
        <FieldSet>
          <InputContainer>
            <label htmlFor="heading">Rubrik</label>
            <Input
              {...register('heading', {
                required: 'Fältet får inte vara tomt',
                maxLength: {
                  value: heading.maxLength,
                  message: `Rubriken får inte vara längre än ${heading.maxLength} tecken`,
                },
              })}
            />
            {errors.heading?.message && (
              <InputErrorMessage message={errors.heading.message} />
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="preamble">Ingress</label>
            <Textarea
              rows={6}
              {...register('preamble', {
                required: 'fältet får inte vara tomt',
                maxLength: {
                  value: preamble.maxLength,
                  message: `Ingressen får inte vara längre än ${preamble.maxLength} tecken`,
                },
              })}
            />
            {errors.preamble?.message && (
              <InputErrorMessage message={errors.preamble.message} />
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="text">Innehåll</label>
            <Textarea
              rows={15}
              {...register('text', {
                required: 'fältet får inte vara tomt',
              })}
            />
            {errors.text?.message && (
              <InputErrorMessage message={errors.text.message} />
            )}
          </InputContainer>
        </FieldSet>

        <FieldSet>
          <InputContainer>
            <label htmlFor="name">Författare</label>
            <Input
              {...register('name', {
                required: 'Fältet får inte var tomt',
                maxLength: {
                  value: author.name.maxLength,
                  message: 'Namnet får inte vara längre än 40 tecken',
                },
              })}
            />
            {errors.name?.message && (
              <InputErrorMessage message={errors.name.message} />
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <Input
              {...register('email', {
                required: 'Fältet får inte vara tomt',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Ogiltig mejladress',
                },
              })}
            />
            {errors.email?.message && (
              <InputErrorMessage message={errors.email.message} />
            )}
          </InputContainer>
        </FieldSet>

        <ButtonSection>
          <Button theme="success" type="submit">
            Skapa
          </Button>
          <Button onClick={handleOnClickCancel}>Gå tillbaka</Button>
        </ButtonSection>
      </Form>
    </Container>
  );
}
