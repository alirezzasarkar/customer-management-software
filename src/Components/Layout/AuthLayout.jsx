import PropTypes from "prop-types";

const AuthLayout = ({ children, title, onSubmit }) => {
  return (
    <main className="flex md:flex-row flex-col justify-evenly items-center h-screen bg-[#F1F1F9]">
      <form onSubmit={onSubmit} className="space-y-7 md:w-[23%]">
        <h1 className="text-center font-bold text-5xl mb-14 text-[#424242]">
          {title}
        </h1>
        {children}
      </form>
      <div
        className="relative h-full w-[30%] bg-cover"
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

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default AuthLayout;
