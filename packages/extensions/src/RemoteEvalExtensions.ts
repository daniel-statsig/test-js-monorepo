import { ClientWithOverrides, bind } from './LocalOverridesBinding';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
let module: typeof import('@statsig-client/remote-eval') | undefined;

declare module '@statsig-client/remote-eval' {
  interface StatsigRemoteEvalClient extends ClientWithOverrides {}
}

try {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  module = require('@statsig-client/remote-eval');
} catch {
  module = undefined;
}

if (module != null) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  bind(module.StatsigRemoteEvalClient.prototype);
}

export { module as ExtendedRemoteEvalModule };
