import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-git-base min-h-[70vh] flex flex-col items-center justify-center container-page text-center py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-extrabold text-git-title tracking-tight text-8xl md:text-9xl mb-4">
          404
        </h1>
        <div className="h-1.5 w-24 bg-git-accent mx-auto mb-8 rounded-full"></div>
        <h2 className="text-[length:var(--text-h2)] font-heading font-extrabold text-git-title mb-6">
          Page not found
        </h2>
        <p className="font-sans text-lg text-git-muted mb-10 leading-relaxed max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="btn-primary py-3.5 px-8 text-base shadow-md hover:shadow-git-accent/20">
          Return to Home &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
