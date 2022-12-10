import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Alert from "../components/Alert";
import { useRouter } from "next/router";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isSignupAlert, setIsSignupAlert] = useState(false);
  const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      const { data, error } = await supabase.auth.getSession();
      if(data.session?.user) {
        router.push('/dashboard')
      }
    }
    redirect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getAllEmails = await supabase.from("users").select("email");
      console.log(getAllEmails);
      const isUniqueEmail =
        getAllEmails?.data?.filter((item) => item.email === email)[0]?.email !==
        email;
      console.log(isUniqueEmail);
      if (isUniqueEmail) {
        const new_profilePic =
          profilePic == ""
            ? "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            : profilePic;
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        await supabase.from("users").upsert({
          name: "Gaurav",
          photoURL: new_profilePic,
          email: "gaurav2499kumar@gmail.com",
        });
        setIsSignupAlert(true);
        console.log(data, error);
      }
      else {
      setIsDuplicateEmail(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Notes App ● Sign up</title>
        <meta name="description" content="Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isSignupAlert && (
        <Alert text="Account created Successfully ! Check your email to verify your account and then Login" setIsDuplicateEmail={setIsDuplicateEmail} setIsSignupAlert={setIsSignupAlert}/>
      )}
        {isDuplicateEmail && (
        <Alert text="A user exists with same email. Try Different one or Login?"  setIsDuplicateEmail={setIsDuplicateEmail} setIsSignupAlert={setIsSignupAlert} />
      )}
      <section className="my-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create and account
              </h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="bg-gray-50 border-none focus:outline-none ring-1 ring-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:ring-2 focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border-none focus:outline-none ring-1 ring-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:ring-2 focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="photourl"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Profile Picture (Optional)
                  </label>
                  <input
                    name="photourl"
                    id="photourl"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    className="bg-gray-50 border-none focus:outline-none ring-1 ring-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:ring-2 focus:border-blue-500"
                    placeholder="Photo URL"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border-none focus:outline-none ring-1 ring-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:ring-2 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border-none focus:outline-none ring-1 ring-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:ring-2 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-indigo-500 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
