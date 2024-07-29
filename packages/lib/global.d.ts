interface NxStatic {
  $exec: (path?: string, ...args: any[]) => any;
  $execFn: (path?: string) => Record<string, any> | Function;
}
