import { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from 'app/services/prisma/userService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    try {
        const newUser = await createUser(email, password)
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error })
    }
    } else {
    res.status(405).json({ message: 'Method not allowed' })
    }
}
