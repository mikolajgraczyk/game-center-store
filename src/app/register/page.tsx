import LoginTab from "@/components/loginTab";

const Register = () => {
  return (
    <LoginTab>
      <form className="flex flex-col gap-[20px] w-full mt-[27.78px]">
        <input
          placeholder="Imię *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          placeholder="Nazwisko *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          placeholder="Wiek *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          placeholder="Email *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          placeholder="Hasło *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          placeholder="Powtórz hasło *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
          Zaloguj się
        </button>
      </form>
    </LoginTab>
  );
};

export default Register;
