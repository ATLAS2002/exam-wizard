import type { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextApiRequest) {
  const token = await getToken({ req });
  console.log(token);
}
