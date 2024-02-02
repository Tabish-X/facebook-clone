import Container from "@/components/Container";
import Facebook_Logo from "@/components/Facebook_Logo";
import CreateAccount from "@/components/auth/signup/CreateAccount";
import LoginForm from "@/components/auth/signin/LoginForm";
import RegisterButton from "@/components/auth/signin/RegisterButton";
import "@/styles/module.login.css"

export default function page({
  searchParams: { auth },
}: {
  searchParams: { auth: string };
}) {
  return (
    <>
      <main
        className={`min-h-screen w-full bg-_theme_primary_gray flex items-center justify-center ${
          auth === "sign-up" && "overflow-hidden fixed"
        }`}
      >
        <Container name="auth">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between md:items-start gap-14 lg:gap-16 md:px-5">
            <article className="w-full select-none text-center md:text-left md:mt-8">
              <Facebook_Logo className="mx-auto md:h-28 md:-mx-8 md:-mb-2" />
              <h2 className="text-_dark text-2xl md:text-2.5xl md:leading-8 font-normal">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </article>

            <div className="w-full md:w-3/4 bg-white rounded-md shadow p-4 mb-5">
              <LoginForm />
              <RegisterButton />
            </div>
          </div>
        </Container>
      </main>

      {auth === "sign-up" && <CreateAccount />}
    </>
  );
}
