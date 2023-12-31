export * from './ClientInterfaces';
export * from './Hashing';
export * from './IDUtil';
export * from './LocalStorageUtil';
export * from './Logger';
export * from './Monitoring';
export * from './NetworkCore';
export * from './StatsigEvent';
export * from './StatsigMetadata';
export * from './StatsigTypes';
export * from './StatsigUser';

declare global {
  interface Window {
    __STATSIG__: {
      [key: string]: unknown;
    };
  }
}
