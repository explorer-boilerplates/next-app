import React, { ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  name?: string;
};

type ErrorBoundaryState = {
  error?: Error;
  info?: ErrorInfo | "";
};

// eslint-disable-next-line import/prefer-default-export
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { error: undefined, info: "" };
  }

  static getDerivedStateFromError(error: Error): { error: Error } {
    // eslint-disable-next-line no-console
    console.error(error);
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      // eslint-disable-next-line react/no-unused-state
      info: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render(): ReactNode {
    const { name, children } = this.props;
    const { error } = this.state;
    if (error) {
      return (
        <>
          <header>
            <h1>Something went wrong.</h1>
            <h3>{`${name} failed to load`}</h3>
          </header>
          <section>
            <pre>
              <code>{JSON.stringify(error)}</code>
            </pre>
          </section>
        </>
      );
    }
    return children;
  }
}
