import { HashRouter, Routes, Route } from "react-router";

import { MainLayout } from "@/layouts/MainLayout";

import { MainPage } from "@/pages/MainPage";
import { CountryPage } from "@/pages/CountryPage";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<CountryPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
