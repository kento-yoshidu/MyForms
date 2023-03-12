import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body)

    res.status(200).json({ data: "test" })
  } catch(e) {
    res.status(500)
  }
}
