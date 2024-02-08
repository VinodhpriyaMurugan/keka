import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/careers/",
//     element: <HomePage />,
//   },
//   {
//     path: "/careers/jobs/:id",
//     element: <JobPage />
//   },
//   {
//     path: "/careers/jobs/",
//     element: <AllJobsPage />
//   },
// ])

root.render(
  <>
    {/* <RouterProvider router={router} /> */}
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/careers/">
          <Route index element={<HomePage />} />
          <Route path="/careers/jobs">
            <Route index element={<AllJobsPage />} />
            <Route path="/careers/jobs/:id" element={<JobPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
