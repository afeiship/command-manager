import { ReactCommandManagerCmd, useCommand } from '@jswork/react-command-manager/src/main';
import '@jswork/react-command-manager/src/style.scss';

function App() {
  const { add, remove, set } = useCommand('abc');
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <ReactCommandManagerCmd name="abc" />
      <section className="y-2">
        <h3 className="bg-blue-200 p-2 rounded-lg">Use Cmds</h3>
        <nav className="actions x-2">
          <button className="btn btn-sm btn-primary" onClick={add}>Add</button>
          <button className="btn btn-sm btn-primary" onClick={() => remove(1)}>Remove</button>
          <button className="btn btn-sm btn-primary" onClick={() => set([1, 2, 3])}>Set 1</button>
        </nav>
      </section>
    </div>
  );
}

export default App;
