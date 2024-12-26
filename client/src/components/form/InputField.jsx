import classNames from "classnames";
import { ErrorMessage, useField } from "formik";

export default function InputField({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <div
      className={classNames({
        "flex flex-col w-full": true,
      })}
    >
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={classNames({
          "px-4 py-2 rounded-md outline-0 border ease-in duration-300 focus:border-primary": true,
          "border-red-600": meta.error,
        })}
      />
      <ErrorMessage
        name={props.name}
        component="div"
        className="text-xs text-red-500"
      />
    </div>
  );
}
