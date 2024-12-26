import * as Yup from "yup";

export const userInfoSchema = Yup.object({
  name: Yup.string().required("").min(3),
  surname: Yup.string().required("Minimum 2 karakter olmalı").min(2),
});

// export const userPasswordSchema = Yup.object.shape({
//   password: Yup.string().required("").min(3),
//   confirmPassword: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password")]),
// });
export const userPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    // .label("confirmPassword") // to use a different name
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
});
// .oneOf([Yup.ref("password")], "Şifreniz eşlemiyor")
// .required("Yeni şifre tekrar alanı boş olamaz");
