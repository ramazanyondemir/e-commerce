import classNames from "classnames";

export default function YearsOption({ label, name, props }) {
  const currentYear = new Date().getFullYear();
  let years = Array.from({ length: 150 }, (_, i) => currentYear - i);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        className={classNames({
          "flex-1 border rounded-md px-4 py-2": true,
        })}
      >
        {years.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
