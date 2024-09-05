interface IProps {
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}: IProps) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextField;
