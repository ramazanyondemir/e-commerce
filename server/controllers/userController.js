import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// import { ObjectId, isValidObjectId } from "mongoose"; // if not use that, remove

export const changeUserInfo = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user._uid);
  let user = await User.findOne({ _id: userId });

  if (user) {
    const { name, surname } = req.body; // get user new data

    if (!name.trim() || !surname.trim()) {
      return res.status(400).json({
        status: 400,
        message: "İsim ve soyisim alanları boş bırakılamaz.",
      });
    }

    try {
      let updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { name: name, surname: surname } },
        { new: true } // required to return the new document // yeni dökümanın geri dönmesi için gerekli
      );

      return res.status(200).json({
        status: 200,
        user: {
          name: updatedUser.name,
          surname: updatedUser.surname,
        },
      });
    } catch (error) {
      console.log("update user error", error);
    }
  }
};

export const changePassword = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user._uid);
  let user = await User.findOne({ _id: userId });

  if (user) {
    const { password, confirmPassword } = req.body;

    if (!password.trim() || !confirmPassword.trim()) {
      return res.status(400).json({
        status: 400,
        message: "Lütfen bütün alanları doldurun!",
      });
    }

    try {
      let updatePassword = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { password: password } },
        { new: true } // required to return the new document // yeni dökümanın geri dönmesi için gerekli
      );

      return res.status(200).json({
        status: 200,
        user: {
          name: updatedUser.name,
          surname: updatedUser.surname,
        },
      });
    } catch (error) {
      console.log("update user error", error);
    }
  }
};
