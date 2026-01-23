import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  if (!MONGODB_URI) {
    // If we are in the build phase, we might not have DB access using standard means.
    // However, for SSG/SSR that requires data, we generally need it.
    // We throw a clear error so it can be caught or debugged.
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  await mongoose.connect(MONGODB_URI, {
    dbName: "portfolio",
  });
}
