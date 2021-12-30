import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    return res.json({
      content:
        "Hey you are already loggedin ! thats why you are able to see this content",
    });
  }

  return res.json({
    error: "Protected page. You must sign in to call the api",
  });
};
