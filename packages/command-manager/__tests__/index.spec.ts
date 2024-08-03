import '@jswork/next';
import { CommandManager } from '../src';

describe('api.basic', () => {
  test('Add/sub by exec command', () => {
    const manager = new CommandManager({
      modules: {
        'app': require('./commands/app').default,
      },
    });
    manager.init();
    const n = nx.$exec('app.add', 1);
    expect(n).toBe(2);

    const n2 = nx.$exec('app.sub', 2);
    expect(n2).toBe(1);
  });

  test('only one method should be name "execute"', () => {
    const manager = new CommandManager({
      modules: {
        'gun': require('./commands/gun').default,
      },
    });
    manager.init();
    const res = nx.$exec('gun');
    expect(res).toBe('shooting a gun');
    const res2 = nx.$exec('gun.execute');
    expect(res2).toBe('shooting a gun');
  });
});
