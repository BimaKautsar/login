import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {

    return (
         <form action="">
          <InputForm label="Email" placeholder="Email@gmail.com" name="email"></InputForm>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Email
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="email"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="********"
            />
          </div>
          <Button classname="bg-blue-600">Login</Button>
        </form>
    );
};
export default FormLogin;