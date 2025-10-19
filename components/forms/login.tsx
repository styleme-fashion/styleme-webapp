"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/auth";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { z } from "zod/v4";
import { loginUser } from "@/actions/auth";
import { useState } from "react";

export default function LoginForm() {
  const [errMessage, setErrMessage] = useState<{ message: string } | null>(
    null
  );
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
    setErrMessage(null);
    setErrMessage(await loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
                placeholder="you@example.com"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                type="password"
                placeholder="••••••••"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {errMessage && (
          <FieldError className="text-center" errors={[errMessage]} />
        )}

        <Button
          disabled={formState.isSubmitting || !formState.isValid}
          type="submit"
          className="w-full"
        >
          Sign In
        </Button>
      </FieldGroup>
    </form>
  );
}
