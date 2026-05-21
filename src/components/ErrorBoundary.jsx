import React from "react";

/**
 * Catches render-time errors in any descendant and shows a recovery UI
 * instead of leaving the page blank. Logs the error to the console so
 * the user can copy it back for debugging.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("App error boundary caught:", error, info);
  }

  reset = () => {
    this.setState({ error: null });
  };

  goHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
          <div className="w-full max-w-xl rounded-2xl border border-slate-600 bg-slate-800 p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-sky-300">
              Something went wrong.
            </h1>
            <p className="mt-3 text-sm text-white/80">
              The page hit an error and stopped rendering. Try again, or
              return to the home page. The error has been logged to your
              browser console (F12 → Console).
            </p>
            <pre className="mt-4 max-h-48 overflow-auto rounded bg-black/50 p-3 text-xs text-white/70">
              {this.state.error?.message || String(this.state.error)}
            </pre>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={this.reset}
                className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold hover:bg-sky-400"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={this.goHome}
                className="rounded-lg border border-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Go home
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
