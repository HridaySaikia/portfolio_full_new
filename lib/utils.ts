// export function getBaseUrl() {
//     if (process.env.NEXT_PUBLIC_BASE_URL) {
//         return process.env.NEXT_PUBLIC_BASE_URL.startsWith('http')
//             ? process.env.NEXT_PUBLIC_BASE_URL
//             : `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
//     }

//     if (process.env.VERCEL_URL) {
//         return `https://${process.env.VERCEL_URL}`;
//     }

//     return 'http://localhost:3000';
// }

export function getBaseUrl() {
  // 1️⃣ Explicit base URL (highest priority)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_BASE_URL
      : `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
  }

  // 2️⃣ Vercel runtime URL (safe check)
  if (process.env.VERCEL_URL && process.env.VERCEL_URL !== "undefined") {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3️⃣ Local development fallback
  return "http://localhost:3000";
}
