import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class RouteErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application boundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-background">
          <div className="max-w-md w-full text-center space-y-6 animate-in fade-in duration-300">
            {/* Error Icon */}
            <div className="inline-flex p-4 bg-error/10 text-error rounded-2xl">
              <AlertCircle className="h-12 w-12" />
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                System Error
              </h1>
              <p className="text-sm text-text-muted">
                An unexpected runtime error has occurred. We have logged the incident and our team is looking into it.
              </p>
            </div>

            {/* Dev Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="p-4 bg-neutral-50 border border-border rounded-xl text-left overflow-x-auto max-h-40 text-xs font-mono text-error">
                <p className="font-bold mb-1">{this.state.error.name}: {this.state.error.message}</p>
                <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-premium-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reload Application
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border hover:bg-surface text-neutral-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
