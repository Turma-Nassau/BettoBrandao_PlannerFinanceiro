// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" });
    // Process a POST request
  } else {
    res.status(200).json({ name: "John Dores" });
    // Handle any other HTTP method
  }
}