import 'bootstrap/dist/css/bootstrap.css';
import PostList from './components/PostList';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './Layout/Layout';
import Dashboard from './pages/Dashboard';
import { UsercontextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
function App() {
  return (
    <UsercontextProvider>

    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/create'} element={<CreatePost />} />
        <Route path={'/post/:id'} element={<PostPage />} />
        <Route path={'/edit/:id'} element={<EditPost />} />
      </Route>
    </Routes>

    </UsercontextProvider>
  );
}

export default App;
