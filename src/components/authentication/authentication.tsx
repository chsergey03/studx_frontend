import {
  useState
} from "react";

interface AuthenticationProps {
  onAuthenticate: () => void;
}

const Authentication: React.FC<AuthenticationProps> = ({onAuthenticate}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login === "admin" && password === "password") {
      setErrorMessage("");
      onAuthenticate();
    } else {
      setErrorMessage("Неверный логин или пароль.");
    }
  };

  return (
    <div
      className="
        flex
        justify-center
        m-[1rem]
        p-[1rem]
        rounded-[2.75rem]
        bg-[#222222]
      "
    >
      <div className="w-[33%]">
        <h1
          className="
            flex
            flex-col
            text-center
          "
        >
          Авторизация
        </h1>

        <form onSubmit={handleSubmit}>
          <div
            className="
              flex
              flex-col
              mt-[0.5rem]
            "
          >
            <label htmlFor="login">Логин:</label>

            <input
              className="
                mt-[0.5rem]
                p-[1rem]
                rounded-[1.75rem]
              bg-[#3b3b3b] 
              text-white
                focus:outline-none
              "
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div
            className="
              flex
              flex-col
              mt-[0.5rem]
            "
          >
            <label htmlFor="password">Пароль:</label>

            <input
              className="
                mt-[0.5rem]
                p-[1rem]
                rounded-[1.75rem]
              bg-[#3b3b3b]
              text-white
                focus:outline-none
              "
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div
            className="
              m-[0.5rem]
              h-[1.25rem]
            "
          >
            {errorMessage && (
               <p
                 className="
                   text-center
                 text-red-600
                 "
               >
                 {errorMessage}
               </p>
             )
            }
          </div>

          <button
            className="
              w-full
              mt-[0.5rem]
              p-[1rem]
              rounded-[1.75rem]
            bg-blue-600 
            hover:bg-blue-700"
            type="submit"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Authentication;