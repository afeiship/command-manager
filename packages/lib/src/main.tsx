import ReactCommandManager from './react';
import CommandManager, { CommandManagerOptions } from './command-manager';
import defineCommand, { DefineCommandResult, DefineCommand, DefineCommandOptions } from './define-command';

export type { CommandManagerOptions, DefineCommandResult, DefineCommand, DefineCommandOptions };

export {
  // widgets
  ReactCommandManager, defineCommand, CommandManager,
};
