import jwt from 'jsonwebtoken';

export async function generateTokens(
  payload: { email: string; id: string; tokenVersion: number },
  expiresAccess?: string,
  expiresRefresh?: string,
) {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresAccess || '1d',
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresRefresh || '7d',
  });

  return { accessToken, refreshToken };
}
