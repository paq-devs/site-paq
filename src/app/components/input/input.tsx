import './input.css';
import InputMask from 'react-input-mask';

type Props = {
    type?: string;
    name: string;
    required: boolean;
    placeholder: string;
    mask?: string;
    value?: string;
    onChange?: (e: any) => void;
};

export default function Input({
  type,
  name,
  required,
  placeholder,
  mask,
  value,
  onChange,
}: Props) {
  // FIXME: `{(inputProps: any) => (...` está conflitando
  // if (mask) {
  //     return (
  //       <InputMask
  //         mask={mask}
  //         maskChar={null}
  //         onChange={onChange}
  //         value={value}
  //       >
  //         {(inputProps: any) => (
  //           <input
  //             {...inputProps}
  //             type={type}
  //             name={name}
  //             required={required}
  //             className="placeholder block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //             placeholder={placeholder}
  //           />
  //         )}
  //       </InputMask>
  //     );
  // }

  return (
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      className="placeholder block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={placeholder}
    />
  );
}

export function TextArea({ name, required, placeholder, onChange }: Props) {
  return (
    <textarea
      name={name}
      required={required}
      onChange={onChange}
      rows={5}
      className="placeholder block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={placeholder}
    />
  );
}
