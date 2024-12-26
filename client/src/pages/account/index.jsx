import Cookies from "js-cookie";
import { useUser } from "../../stores/auth/hooks";
import { setUserInfo } from "../../stores/auth/actions";
import { Form, Formik } from "formik";
import InputField from "../../components/form/InputField";
import axios from "axios";
import { userInfoSchema } from "../../validations/user/userSchema";
import { BASE_URL } from "../../constants/index.js";
import SelectField from "../../components/form/DateField.jsx";
import YearsOption from "../../components/form/YearOption.jsx";
import MonthOption from "../../components/form/MonthOption.jsx";
import DayOption from "../../components/form/DayOption.jsx";

export default function UserInfo() {
  const user = useUser();

  return (
    <div className="flex flex-col w-full px-4 lg:pr-0">
      <div className="flex max-w-lg mx-auto w-full">
        <Formik
          initialValues={{
            name: user.name,
            surname: user.surname,
            day: user.gun,
            month: user.ay,
            year: user.yil,
          }}
          validationSchema={userInfoSchema}
          onSubmit={async (values) => {
            alert(JSON.stringify(values, null, 2));
            // try {
            //   const { data } = await axios.post(
            //     `${BASE_URL}/user/den`,
            //     values,
            //     {
            //       headers: {
            //         Authorization: `Bearer ${Cookies.get("token")}`,
            //       },
            //     }
            //   );
            //   if (data.status === 200) setUserInfo(data.user);
            // } catch (error) {
            //   console.error("Error:", error.response);
            // }
          }}
        >
          {({ errors }) => {
            console.log("errors", errors);

            return (
              <Form className="w-full">
                <div className="flex gap-2 flex-col mb-3 lg:flex-row">
                  <InputField
                    name="name"
                    type="text"
                    label="Ad"
                    id="name"
                    customstyle="lg:w-1/2"
                  />

                  <InputField
                    name="surname"
                    type="text"
                    label="Soyad"
                    id="soyad"
                    customstyle="lg:w-1/2"
                  />
                </div>
                {/* Date picker */}
                <div className="grid grid-cols-3 gap-x-4">
                  {/* <SelectField name="day" label="Gün" id="day" fieldType="day" /> */}
                  <div className="flex flex-col">
                    <DayOption name="day" label="Gün" id="day" />
                  </div>
                  <div className="flex flex-col">
                    <MonthOption name="month" label="Ay" id="month" />
                  </div>
                  <div className="flex flex-col">
                    <YearsOption name="year" label="Yıl" id="year" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-3 bg-primary rounded-md"
                >
                  Güncelle
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

      <div className="flex flex-col max-w-lg mx-auto w-full mt-8">
        <div className="mb-3">
          <p>İletişim Bilgileri</p>
        </div>
        <input
          type="text"
          defaultValue={user.phone}
          id="phone"
          className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
        />
        <input
          type="text"
          defaultValue={user.email}
          disabled={true}
          id="email"
          className="px-4 py-2 rounded-md outline-none border ease-in duration-300 focus:border-primary"
        />
      </div>
    </div>
  );
}
