export async function refreshAccessToken(refreshToken) {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.AUTH_GOOGLE_ID || "",
        client_secret: process.env.AUTH_GOOGLE_SECRET || "",
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      console.log("response not ok", await response.json());
      throw new Error("Failed to refresh access token");
    }

    const data = await response.json();

    return data.access_token; // New access token
  } catch (error) {
    console.log("error", error);
    return "";
  }
}