const AuthLayout = ({ children, title, onSubmit }) => {
  return (
    <main className="flex md:flex-row flex-col justify-evenly items-center h-screen bg-[#F1F1F9]">
      <form
        onSubmit={onSubmit}
        className="space-y-7 w-3/4 md:w-1/2 lg:w-[35%] xl:w-[23%]"
      >
        <h1 className="text-center font-bold text-5xl mb-14 text-[#424242]">
          {title}
        </h1>
        {children}
      </form>
      <div
        className="relative h-full md:w-[30%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] bg-cover lg:block hidden "
        style={{
          backgroundImage: "url('/images/Blue_Background.svg')",
        }}
      >
        <img
          src="/images/AdklayLogo.svg"
          alt="AdklayLogo"
          className="absolute inset-9 m-auto"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
