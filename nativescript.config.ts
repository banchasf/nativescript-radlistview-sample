import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.angular',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  cli: {
    packageManager: 'npm'
  },
  ios: {
    gcThrottleTime: 100,
    memoryCheckInterval: 100,
    freeMemoryRatio: 0.2,
  }
} as NativeScriptConfig;
