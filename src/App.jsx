import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';

//pages
import Home from './pages/Home';
import FragLayout from './layouts/FragLayout';
import FragGallery from './pages/FragGallery';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="/fragrances" element={<FragLayout />}>
          <Route index element={<FragGallery />} />
          {/* <Route path="men" element={<FragGallery />} />
          <Route path="women" element={<FragGallery />} /> */}
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
