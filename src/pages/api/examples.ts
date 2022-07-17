// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";

const examples = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Hello World!" });
};

export default examples;
