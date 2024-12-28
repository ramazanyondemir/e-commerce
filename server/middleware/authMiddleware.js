import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Yetkisiz erişim",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Geçersiz token" });
      } else {
        req.user = decoded;
      }
    });
  }
  next();
}
