import { useRouteError, Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col flex-wrap justify-center items-center min-h-[80vh]"
    >

      <h1 className="uppercase ">
        <i>page {error.statusText || error.message}</i>
      </h1>
      <p className="max-w-[400px] text-center">
        Sorry, an unexpected error has occurred. Double-check the URL and try
        again or click the button below.
      </p>
      <div className="flex flex-wrap gap-7 mt-7 items-center">
        <div>
          <Link to="/pricing">
            <button className="download uppercase font-bold py-6 px-8">
              view pricing
            </button>
          </Link>
        </div>
        <p>or</p>
        <div>
          <Link to="/">
            <button className="pricing download uppercase font-bold py-6 px-8">
              go home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
