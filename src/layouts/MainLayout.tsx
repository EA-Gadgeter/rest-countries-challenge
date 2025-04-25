import { Outlet } from "react-router";

import { Header } from "@/components/ui/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};