import '@jswork/next';
import { CommandManager } from '../src';

describe('api.basic', () => {
  test('Add/sub by exec command', () => {
    const manager = new CommandManager({
      modules: {
        'app': require('./commands/app').default
      }
    });
    manager.init();
    const n = nx.$exec('app.add', 1);
    expect(n).toBe(2);

    const n2 = nx.$exec('app.sub', 2);
    expect(n2).toBe(1);
  });
});
