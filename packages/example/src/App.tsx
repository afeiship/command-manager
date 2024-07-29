import { scanVite } from '@jswork/scan-modules';
import nx from '@jswork/next';
import ReactCommandManager from '@jswork/react-command-manager/src/main';

const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
const modules = scanVite(moduleFiles, { modules: '/commands/' });


function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <button onClick={() => nx.$exec('user.login')} className="btn btn-primary">User Login</button>
      <div className="y-2">
        <h3>Posts</h3>
        <nav className="x-2">
          <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('post.create')}>New Post</button>
          <button className="btn btn-sm btn-secondary"
                  onClick={() => nx.$exec('post.update', { title: 'New Title' })}>Update Post
          </button>
        </nav>
      </div>
      <div className="y-2">
        <h3>Products</h3>
        <nav className="x-2">
          <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.add')}>Add to compare
          </button>
          <button className="btn btn-sm btn-secondary" onClick={() => nx.$exec('productCompare.remove')}>Remove from
            compare
          </button>
        </nav>
      </div>
      <ReactCommandManager nx={nx} modules={modules} />
    </div>
  );
}

export default App;
