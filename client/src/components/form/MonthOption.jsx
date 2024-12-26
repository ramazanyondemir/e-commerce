import classNames from "classnames";
import { useField } from "formik";

export default function MonthOption({ label, name, props }) {
  const months = Array.from({ length: 31 }, (_, i) => i + 1);
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        {...field}
        className={classNames({
          "flex-1 border rounded-md px-4 py-2": true,
        })}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </>
  );
}
