import objectPath from 'object-path';
import type { DefineCommandResult } from './define-command';

export type CommandManagerOptions = {
  /**
   * The command modules.
   */
  modules: Record<string, DefineCommandResult>;
  /**
   * The context of command modules.
   */
  context?: any;
};


export default class CommandManager {
  private readonly commands: Record<string, any>;
  private readonly options: CommandManagerOptions;

  get ctx() {
    const { context } = this.options;
    const $ctx = context || null;
    return {
      $ctx,
      ...this.commands,
    };
  }

  constructor(options: CommandManagerOptions) {
    this.options = options;
    this.commands = {};
  }

  init() {
    const { modules } = this.options;
    const { commands } = this;
    const root = typeof window === 'undefined' ? globalThis : window;

    // set global $exec method.
    objectPath.set(root, 'nx.$exec', this.execute);
    objectPath.set(root, 'nx.$execFn', this.executeFn);

    // attach commands to state.
    Object.keys(modules).forEach((key: string) => {
      const value = modules[key] as DefineCommandResult;
      const name = value.name || key;
      if (commands[name]) throw new Error(`Command name "${name}" is duplicated.`);
      objectPath.set(commands, name, value.commands);
      value.init?.call(this.ctx, value.commands);
    });
  }

  executeFn = (path: string) => {
    return objectPath.get(this.ctx, path) as Function | undefined;
  };

  execute = (path: string, ...args: any[]) => {
    const method = this.executeFn(path);
    return method?.call(this.ctx, ...args);
  };
}
