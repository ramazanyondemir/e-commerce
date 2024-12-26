import classNames from "classnames";
import { useField } from "formik";

export default function DayOption({ label, name, props }) {
  const day = Array.from({ length: 31 }, (_, i) => i + 1);
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
        {day.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </>
  );
}
