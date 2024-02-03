"use client";

import { signIn } from "next-auth/react";

import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from "./ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { SmartButton } from "./ui/button";
import { Separator, SeparatorWithText } from "./ui/separator";
import { Input } from "./ui/input";
import { defaultFieldValues } from "~/context/ProfileProvider";
import type { FCProps, RoleType } from "~/types";
import { type FormSchema, formSchema } from "~/lib/schema";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type Control,
  type FieldName,
  type SubmitHandler,
} from "react-hook-form";

export const ProfileForm: FCProps<{ role: RoleType }> = ({
  children: trigger,
  role,
}) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultFieldValues, role: role },
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    console.log(data);
    const { email } = data;
    await signIn("email", { email });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        className="bg-black bg-opacity-40 text-white backdrop-blur-sm"
        side={"right"}
      >
        <SheetHeader>
          <SheetTitle className="font-code text-3xl text-white">
            Create Profile
          </SheetTitle>
          <SheetDescription className="text-slate-400">
            Make changes to your profile here. Click save when you
            {"'"}
            re done. Note that you can not change these later.
          </SheetDescription>
        </SheetHeader>

        <Separator className="mb-4 mt-8" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Field
              control={form.control}
              name="name"
              example="John Doe"
              label="Name"
              description="Enter your full name."
              // hoverText="Required"
            />
            <Field
              control={form.control}
              name="email"
              example="xyz@example.com"
              label="Email"
              description="Enter your public email address."
              // hoverText="Required"
            />
            {/* <SheetClose asChild> */}
            <SmartButton variant="solid" type="submit">
              Sign up with Email
            </SmartButton>
            {/* </SheetClose> */}
          </form>
        </Form>
        <SeparatorWithText className="opacity-80">or</SeparatorWithText>

        <SmartButton
          onClick={() => signIn("google")}
          className="h-[6%]"
          variant="outline"
          type="submit"
        >
          <div className="relative mr-2 aspect-square h-full">
            <Image src="/icons/google.png" fill alt="google" />
          </div>
          Continue with Google
        </SmartButton>
        <SmartButton
          onClick={() => signIn("linkedin")}
          className="h-[6%]"
          variant="outline"
          type="submit"
        >
          <div className="relative mr-2 aspect-square h-[110%]">
            <Image src="/icons/linkedin.png" fill alt="linkedin" />
          </div>
          Continue with LinkedIn
        </SmartButton>
      </SheetContent>
    </Sheet>
  );
};

const Field: FCProps<{
  control: Control<FormSchema>;
  name: FieldName<FormSchema>;
  label: string;
  description: string;
  example: string;
  hoverText?: string;
}> = ({ control, name, label, description, example, hoverText }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex gap-4">
            <SmartButton
              asChild
              className="m-0 touch-none bg-transparent p-0 hover:bg-transparent"
              hoverText={hoverText}
            >
              <FormLabel className="text-align h-full cursor-pointer py-2 font-code text-lg">
                {label}:
              </FormLabel>
            </SmartButton>
            <FormControl>
              <Input
                className="text-md rounded-none border-0 bg-transparent p-0 font-code font-bold text-white focus:outline-none focus:ring-0"
                placeholder={example}
                {...field}
              />
            </FormControl>
          </div>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
