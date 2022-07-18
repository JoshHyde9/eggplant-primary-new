import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { Formik, Form, Field } from "formik";

interface registerSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: NextPage = () => {
  const router = useRouter();
  const { mutate, error, isLoading } = trpc.useMutation(["user.register"], {
    onSuccess: () => {
      router.push("/blog");
    },
  });

  const initialValues: registerSchema = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center mt-10">Register</h1>
      <div className="flex h-screen justify-center mt-20">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          <Form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name:
                </label>
                <Field
                  name="firstName"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                  placeholder="First name..."
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name:
                </label>
                <Field
                  name="lastName"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                  placeholder="Last name..."
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <Field
                  name="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                  type="email"
                  placeholder="Email..."
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <Field
                  name="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password:
                </label>
                <Field
                  name="confirmPassword"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-400 py-2.5 rounded-full hover:bg-fuchsia-300 transition-all flex flex-row justify-center items-center"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                ""
              )}
              Register
            </button>
            {error ? <p className="mt-2">{error.message}</p> : null}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
