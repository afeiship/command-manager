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
   * If debug mode, will show more logs.
   */
  debug?: boolean
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

  constructor(props: ReactCommandManagerProps) {
    super(props);
    this.state = { commands: {} };
    nx.set(nx, '$exec', this.execute);
    if (props.debug) nx.set(nx, '__commands__', this);
    this.initModules();
  }

  initModules() {
    const { modules } = this.props;
    const { commands } = this.state;
    nx.forIn(modules, (key: string, value: DefineCommandResult) => {
      const name = value.name || key;
      value.init?.(value.commands);
      commands[name] = value.commands;
    });
  }

  execute = (path: string, ...args: any[]) => {
    const { commands } = this.state;
    const method = nx.get(commands, path) as Function | undefined;
    return method?.call(commands, ...args);
  };

  render() {
    const { children } = this.props;
    return children;
  }
}
