import { cookies } from "next/headers";
import { isDevEnvironment } from "./utils";

export async function getOrCreateSessionId() {
  "use server";
  const cookieStore = await cookies();
  let sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    cookieStore.set({
      name: "sessionId",
      value: sessionId,
      httpOnly: true,
      path: "/",
      secure: !isDevEnvironment,
      sameSite: !isDevEnvironment ? "lax" : "strict",
    });
  }
  return sessionId;
}
