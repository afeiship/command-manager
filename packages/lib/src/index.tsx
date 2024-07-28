// import noop from '@jswork/noop';
// import cx from 'classnames';
import nx from '@jswork/next';
import React, { ReactNode, Component } from 'react';
import { CommandContext } from './context';
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
  modules: Record<string, DefineCommandResult>
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
    this.processModules();
  }

  processModules() {
    const { modules } = this.props;
    const { commands } = this.state;
    nx.forIn(modules, (key: string, value: DefineCommandResult) => {
      const name = value.name || key;
      value.init?.(this);
      commands[name] = value.commands;
    });
  }

  execute = (path: string, ...args: any[]) => {
    const method = nx.get(this.state.commands, path) as Function | undefined;
    return method?.(...args);
  };

  render() {
    const { children } = this.props;
    return (
      <CommandContext.Provider value={{ $cmd: this.state.commands, $execute: this.execute }}>
        {children}
      </CommandContext.Provider>
    );
  }
}
