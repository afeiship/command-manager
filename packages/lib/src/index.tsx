import nx from '@jswork/next';
import { Component } from 'react';
import type { DefineCommandResult } from './define-command';

const CLASS_NAME = 'react-command-manager';

export type ReactCommandManagerProps = {
  /**
   * The command modules.
   */
  modules: Record<string, DefineCommandResult>;
  /**
   * The context of command modules.
   */
  context?: any;
};

export default class ReactCommandManager extends Component<ReactCommandManagerProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  private readonly commands: Record<string, any>;
  static defaultProps = {
    modules: [],
  };

  get ctx() {
    const { context } = this.props;
    return context || this.commands;
  }

  constructor(props: ReactCommandManagerProps) {
    super(props);
    this.commands = {};
    this.initModules();
  }

  initModules() {
    const { modules } = this.props;
    const { commands } = this;

    // set global $exec method.
    nx.set(nx, '$exec', this.execute);
    nx.set(nx, '$execFn', this.executeFn);

    // attach commands to state.
    nx.forIn(modules, (key: string, value: DefineCommandResult) => {
      const name = value.name || key;
      if (commands[name]) throw new Error(`Command name "${name}" is duplicated.`);
      nx.set(commands, name, value.commands);
      value.init?.call(this.ctx, value.commands);
    });
  }

  executeFn = (path: string) => {
    return nx.get(this.commands, path) as Function | undefined;
  };

  execute = (path: string, ...args: any[]) => {
    const method = this.executeFn(path);
    return method?.call(this.ctx, ...args);
  };

  render() {
    return null;
  }
}
