"use server";
import React from 'react'
import * as z from 'zod'
import { LoginSchema } from '@/schemas';
import { error } from 'console';

const login = async (values:z.infer<typeof LoginSchema>) => {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);
  if(!validatedFields.success){
    return {error:"Invalid fields"};
  }
  return {success:"Email sent"};
}

export default login