import { Component } from 'react';
import { CommandManager, CommandManagerOptions } from '@jswork/command-manager';

const CLASS_NAME = 'command-manager';

export type ReactCommandManagerProps = CommandManagerOptions

export default class ReactCommandManager extends Component<ReactCommandManagerProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  private readonly commandManager: CommandManager | null = null;
  static defaultProps = {
    modules: [],
  };

  constructor(props: ReactCommandManagerProps) {
    super(props);
    this.commandManager = new CommandManager(props);
    this.commandManager.init();
  }

  render() {
    return null;
  }
}