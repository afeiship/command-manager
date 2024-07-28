interface NxStatic {
  $exec: (path?: string, ...args: any[]) => any;
  __commands__: Record<string, any>;
}
