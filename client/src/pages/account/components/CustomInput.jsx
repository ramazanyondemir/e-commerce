export default function CustomInput({ ...props }) {
  //TODO: daha sonra kullan
  const { label, type, name, id } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
    </>
  );
}
