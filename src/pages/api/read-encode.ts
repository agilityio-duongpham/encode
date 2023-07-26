// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  encode: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { encode } = req.body as RequestBody;
    const parse = JSON.parse(decodeURIComponent(encode));

    return res.status(200).json(parse);
  }
}
