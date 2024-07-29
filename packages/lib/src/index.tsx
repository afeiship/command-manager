import nx from '@jswork/next';
import { ReactNode, Component } from 'react';
import type { DefineCommandResult } from './define-command';

const CLASS_NAME = 'react-command-manager';

export type ReactCommandManagerProps = {
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The command modules.
   */
  modules: Record<string, DefineCommandResult>;
  /**
   * The context of command modules.
   */
  context?: any;
};

interface ReactCommandManagerState {
  commands: Record<string, any>;
}

export default class ReactCommandManager extends Component<ReactCommandManagerProps, ReactCommandManagerState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    modules: [],
  };

  get ctx() {
    const { context } = this.props;
    return context || this.state.commands;
  }

  constructor(props: ReactCommandManagerProps) {
    super(props);
    this.state = { commands: {} };
    this.initModules();
  }

  initModules() {
    const { modules } = this.props;
    const { commands } = this.state;

    // set global $exec method.
    nx.set(nx, '$exec', this.execute);
    nx.set(nx, '$execFn', this.executeFn);

    // attach commands to state.
    nx.forIn(modules, (key: string, value: DefineCommandResult) => {
      const name = value.name || key;
      if (commands[name]) throw new Error(`Command name "${name}" is duplicated.`);
      value.init?.call(this.ctx);
      nx.set(commands, name, value.commands);
    });
  }

  executeFn = (path: string) => {
    const { commands } = this.state;
    return nx.get(commands, path) as Function | undefined;
  };

  execute = (path: string, ...args: any[]) => {
    const method = this.executeFn(path);
    return method?.call(this.ctx, ...args);
  };

  render() {
    const { children } = this.props;
    return children;
  }
}
