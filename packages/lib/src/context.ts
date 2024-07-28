import { createContext, useContext } from 'react';
import nx from '@jswork/next';

const ERR_MSG = 'useCommand must be used within a Context.Provider';

export type CommandType = { $cmd: Record<string, any> };
export const CommandContext = createContext({} as CommandType);

export const useCommand = (name: string) => {
  const ctx = useContext<CommandType>(CommandContext);
  if (!ctx) throw new Error(ERR_MSG);
  const methods = nx.get(ctx.$cmd, name);
  if (!methods) throw new Error(`Command ${name} not found`);
  return methods;
};
