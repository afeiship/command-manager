export interface DefineCommandOptions {
  name?: string;
  methods: Record<string, (...args: any[]) => any>;
}

export interface DefineCommandResult {
  name?: string;
  init: (...args: any[]) => any;
  commands: Record<string, (...args: any[]) => any>;
}

export type DefineCommand = (inOptions: DefineCommandOptions) => DefineCommandResult;

export default function defineCommand(inOptions: DefineCommandOptions): DefineCommandResult {
  const { name, methods } = inOptions;
  const { init, ...commands } = methods;
  return {
    name,
    init,
    commands,
  };
}
