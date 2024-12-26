import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../../components/form/InputField";
import { userPasswordSchema } from "../../validations/user/userSchema";

export default function ChangePassword() {
  return (
    <div className="flex flex-col w-full px-4 lg:pr-0">
      <div className="flex max-w-lg mx-auto w-full">
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={userPasswordSchema}
          onSubmit={async (values) => { 
            alert(JSON.stringify(values, null, 2));
            // fetch('/changepassword', {
            //   method: 'POST',
            //   body:
            // })
          }}
        >
          {({ errors }) => (
            <Form className="w-full">
              <div className="flex gap-2 flex-col mb-3 lg:flex-row">
                <InputField
                  name="password"
                  type="text"
                  label="Şifre"
                  id="password"
                  customstyle="lg:w-1/2"
                />
                <InputField
                  name="confirmPassword"
                  type="text"
                  label="Tekrar Şifre"
                  id="confirmPassword"
                  customstyle="lg:w-1/2"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-3 bg-primary rounded-md"
              >
                Güncelle
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
