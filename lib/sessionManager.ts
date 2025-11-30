import { stackServerApp } from "@/stack/server";
import { cookies } from "next/headers";

export async function getSessionId() {
  "use server";
  const cookieStore = await cookies();
  const user = await stackServerApp.getUser();
  const sessionId = cookieStore.get("sessionId")?.value || "";

  return user ? user.id : sessionId;
}
