import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuth } from "../context/Session";

export default function Login() {
  const { session, signIn, onError, errorMessage } = useAuth();
  const [validated, setValidated] = useState();
  const [email, setEmail] = useState("a@test1.com");
  const [password, setPassword] = useState("Welcome123456!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const login = (e) => {
    e.preventDefault();

    //Validations
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);

    //API call
    signIn({
      email,
      password,
    });
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{`Login Blog APP`}</title>
        </Head>
        <Container>
          <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ">
            <div className="w-full">
              <h1 className="text-3xl font-semibold text-center underline">
                Sign in
              </h1>
              <form onSubmit={login} noValidate validated={validated}>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input w-full px-4 py-3"
                    required
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-input w-full px-4 py-3"
                    required
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full border px-4 py-2" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>{onError && errorMessage}</div>
        </Container>
      </Layout>
    </>
  );
}
