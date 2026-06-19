"use server";

import { redirect } from "next/navigation";
import { createSession } from "@/lib/auth";

const VALID_EMAIL = "seller@lumenbooks.test";
const VALID_PASSWORD = process.env.SELLER_PASSWORD ?? "password123";

export async function login(_prevState: { error: string } | undefined, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
    return { error: "Invalid email or password." };
  }

  await createSession();
  redirect("/dashboard");
}

