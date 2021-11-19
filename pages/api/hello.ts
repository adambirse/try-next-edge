// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  greeting: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const languageSpecifiGreeting = req.query.greeting;
  res.status(200).json({ greeting: `${languageSpecifiGreeting} John Doe` })
}
