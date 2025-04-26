import { Outlet } from "react-router";

import { Header } from "@/components/ui/Header";

import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};