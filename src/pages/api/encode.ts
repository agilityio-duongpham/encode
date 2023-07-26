import type { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  email: string;
  target: string;
  code: string;
  expiredTime: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body as RequestBody;
    const encode = encodeURIComponent(JSON.stringify(body));

    return res.status(200).json(encode);
  }
}
