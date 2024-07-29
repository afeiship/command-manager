interface NxStatic {
  $exec: (path?: string, ...args: any[]) => any;
  $execFn: (path: string) => Function | undefined;
  /** Only for debug mode, Don't use it in production. */
  __commands__: Record<string, any>;
}
