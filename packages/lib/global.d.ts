interface NxStatic {
  $exec: (path?: string, ...args: any[]) => any;
  /** Only for debug mode, Don't use it in production. */
  __commands__: Record<string, any>;
}
