import DayOption from "./DayOption";

export default function SelectField({ label, ...props }) {
  return (
    <div className="flex flex-col w-full">
      <DayOption label={label} props={props} />
    </div>
  );
}
