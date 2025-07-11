import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route,
  Link
} from "react-router-dom";
import { Button } from "@/components/ui/button"
import HomePage from "./pages/Home";
import AdminPage from "./pages/Admin";
import Layout from "./Layout";

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
        <Route path="/admin" element={<Layout />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App