import CommandManager, { CommandManagerOptions } from './command-manager';
import defineCommand, { DefineCommandResult, DefineCommand, DefineCommandOptions } from './define-command';

// export types - for consumers of the package
export type { CommandManagerOptions, DefineCommandResult, DefineCommand, DefineCommandOptions };

// export modules
export { CommandManager, defineCommand };
