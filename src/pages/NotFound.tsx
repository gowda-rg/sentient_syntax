import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-darshan-deep via-darshan-cosmic to-darshan-mist p-6">
    <div className="text-center max-w-md">
      <p className="text-sm uppercase tracking-widest text-darshan-accent/80 mb-2">404</p>
      <div className="hire-card p-8">
      <h1 className="hire-display text-3xl mb-4">Page not found</h1>
      <Link to="/" className="hire-link">
        Back to portfolio
      </Link>
      </div>
    </div>
  </main>
);

export default NotFound;