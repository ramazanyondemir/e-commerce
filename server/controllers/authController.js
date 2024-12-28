import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  let same = false;

  console.log("user", user);
  if (user) {
    same = await bcrypt.compare(password, user.password);
  } else {
    return res.status(401).json({
      status: false,
      message: "Kullanıcı adı veya Şifre yanlış",
    });
  }

  if (!same) {
    return res.status(401).json({
      status: false,
      message: "Kullanıcı adı veya Şifre yanlış",
    });
  } else {
    const token = jwt.sign(
      {
        _uid: user._id.toString(),
        email,
      },
      process.env.JWT_SECRET
    );

    return res
      .status(200)
      .cookie("token", token, {
        // httpOnly: true, // güvenlik için açık olmalı, ama lokal'de https yok.
        // Sunucuya yüklediğinde cookie'yi sen istekte eklemediğinde otomatik gönderip göndermediğini dene.
        secure: true,
        sameSite: "Strict",
      })
      .json({
        status: 200,
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone,
        },
      });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).send({ status: 200, message: "Başarıyla çıkış yapıldı." });
};

export const register = async (req, res) => {
  const { ...userData } = req.body;
  console.log("userdata: ", userData);
  await User.create(userData).catch((err) => console.log(err));
};

export const me = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, procces.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Geçersiz token" });
    } else {
      let user = await User.findOne({ email: decoded.email });
      return res.status(200).json({
        // status: true,
        user: {
          _uid: user._id.toString(),
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone,
        },
      });
    }
  });
};
