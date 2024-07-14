"use server";
import { cookies } from "next/headers";
export async function setCookie(value: string) {
  // prettier-ignore
  const cookie = cookies();
  cookie.set({ name: "theme", value, httpOnly: true });
}
