import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next();
  });
});

// userSchema.index({ createdAt: 1 }, { expires: "7d" });

export const User = mongoose.model("User", userSchema);
