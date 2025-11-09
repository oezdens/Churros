import React from 'react';

interface State {
  hasError: boolean;
  error?: Error | null;
  info?: React.ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You could log to an external service here
    this.setState({ hasError: true, error, info });
    // eslint-disable-next-line no-console
    console.error('Captured error in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error?.message || 'Unbekannter Fehler';
      const stack = this.state.info?.componentStack || this.state.error?.stack || '';
      return (
        <div style={{ padding: 24 }}>
          <div style={{ background: '#fff5f5', border: '1px solid #fecaca', padding: 16, borderRadius: 8 }}>
            <h2 style={{ margin: 0, color: '#b91c1c' }}>Ein Fehler ist aufgetreten</h2>
            <p style={{ marginTop: 8, color: '#7f1d1d' }}>{message}</p>
            <details style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>
              <summary style={{ cursor: 'pointer' }}>Fehlerdetails</summary>
              <pre style={{ maxHeight: 300, overflow: 'auto' }}>{stack}</pre>
            </details>
            <p style={{ marginTop: 12 }}>
              Bitte prüfen Sie die Konsole oder kontaktieren Sie den Entwickler.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
