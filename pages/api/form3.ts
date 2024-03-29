import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    res.status(200).json({ email: req.body })
  } catch(e) {
    res.status(500)
  }
}
