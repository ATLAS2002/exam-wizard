import type { Dispatch, FC, ReactNode, SetStateAction } from "react";
import type { NextRequest, NextResponse } from "next/server";
import type { EmailConfig } from "next-auth/providers/email";

export type FCProps<T = unknown> = FC<
  {
    children?: ReactNode;
    className?: string;
  } & T
>;

export type State<TValue, THandler> = {
  value: TValue;
  handler: THandler;
};

export type StateDispatcher<T> = Dispatch<SetStateAction<T>>;

export type NextRouteHandler = (req: NextRequest, res: NextResponse) => unknown;

export enum RoleType {
  ADMIN = "admin",
  FACULTY = "faculty",
  STUDENT = "student",
}

export interface CustomEmailConfig {
  id: string;
  name: string;
  type: "email";
  sendVerificationRequest: EmailConfig["sendVerificationRequest"];
}
