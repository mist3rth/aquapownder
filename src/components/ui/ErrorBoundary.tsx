import { Component, type ErrorInfo, type ReactNode } from 'react';
import { log } from '../../utils/logger';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    log.error('Erreur attrapée par le périmètre de sécurité:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{ padding: '40px', textAlign: 'center', background: '#f5f5f7', color: '#1d1d1f', borderRadius: '14px', margin: '20px' }}>
          <h2>Oops, une erreur est survenue dans cette section.</h2>
          <p>Notre équipe technique (ou un stagiaire) a été prévenue. Veuillez recharger la page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
