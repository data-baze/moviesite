import React from "react";

const ErrorPage = () => {
  return (
    <div className="container text-center mt-5">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1697798780~exp=1697799380~hmac=7a135a229de3925a66b9edba8fe2632cf80c60e73f2f437cf32908df89be5706"
        alt="Page Not Found"
        className="h-25 w-25 img-fluid rounded-circle"
      />
      <h1 className="display-4"> 404 Page Not Found </h1>
      <p className="lead"> Oops The page you're looking for does not exist</p>
    </div>
  );
};

export default ErrorPage;
