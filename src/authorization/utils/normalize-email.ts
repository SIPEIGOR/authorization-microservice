export function normalizeEmail(email: string): string {
  return email.replace(/\s+/g, '').toLowerCase();
}
