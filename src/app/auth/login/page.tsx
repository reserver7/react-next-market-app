"use client";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const response = await signIn("credentials", body);
      if (response && "data" in response) {
        const { data } = response;
        // 'data'를 적절하게 사용합니다
        console.log(data);
      } else {
        // 'data'가 undefined인 경우나 'response'에 'data' 속성이 없는 경우 처리합니다
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="grid h-[calc(100vh_-_56px)] place-items-center">
      <form
        className="flex flex-col justify-center gap-4 min-w-[350px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl">Login</h1>

        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Button label="Login" isLoading={isLoading} />
        <div className="text-center">
          <p className="text-gray-400">
            Not a member?{" "}
            <Link href="/auth/register" className="text-black hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
