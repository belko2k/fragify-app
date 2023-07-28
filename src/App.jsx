import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';
import FragLayout from './layouts/FragLayout';
import FragDetailsLayout from './layouts/FragDetailsLayout';

//pages
import Home from './pages/Home';
import FragGallery from './pages/FragGallery';
import FragDetails from './pages/FragDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="fragrances" element={<FragLayout />}>
          <Route
            index
            element={<FragGallery categoryType="allFragrances" title="All" />}
          />
          <Route
            path="men"
            element={<FragGallery categoryType="men" title="For Him" />}
          />
          <Route
            path="women"
            element={<FragGallery categoryType="women" title="For Her" />}
          />
        </Route>

        <Route element={<FragDetailsLayout />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
