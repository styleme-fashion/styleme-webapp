"use server";

import { createClient } from "@/lib/supabase/server";
import { loginSchema, signupSchema } from "@/schema/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod/v4";

export async function loginUser(
  data: z.infer<typeof loginSchema>
): Promise<{ message: string } | null> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    return { message: error.message };
  } else {
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}

export async function signupUser(
  data: z.infer<typeof signupSchema>
): Promise<{ message: string } | null> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    return { message: error.message };
  } else {
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}
