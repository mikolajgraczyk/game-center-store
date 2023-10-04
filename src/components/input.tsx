import { useFormContext } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ id, placeholder }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  let inputType: string | undefined;
  if(id === "password" || id === "passwordConfirmation"){
    inputType = "password";
  }
  if(id === "age"){
    inputType = "number";
  }

  return (
    <div className="relative">
      <input
        {...register(id)}
        type={inputType}
        placeholder={placeholder}
        className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
      />
      {errors[id] ? (
        <span className="text-[10px] text-[#EA1818] absolute left-0 bottom-[-15px]">
          {errors[id].message}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
