export const log = {
  dev: (...args: any[]) => {
    if (import.meta.env.MODE === 'development') {
      console.log('🛠️ [DEV]:', ...args);
    }
  },
  warn: (...args: any[]) => {
    if (import.meta.env.MODE === 'development') {
      console.warn('⚠️ [DEV WARN]:', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('🚨 [ERROR]:', ...args);
  }
};
