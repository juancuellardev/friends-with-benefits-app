import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import AdminPage from "./pages/Admin";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    // <div className="flex min-h-svh flex-col items-center justify-center">
    //   <Button>Click me</Button>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App