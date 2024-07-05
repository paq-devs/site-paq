import type { NextApiRequest, NextApiResponse } from "next";
import { content as jsonContent } from "./papel-paq.json";

type ResponseData = {
  content: typeof jsonContent;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ content: jsonContent });
}
