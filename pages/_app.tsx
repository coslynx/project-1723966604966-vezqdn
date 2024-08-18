"use client";

import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { getGoals } from "@/utils/formatData";
import { GoalCard, ProgressChart, Header } from "@/components";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [goals, setGoals] = useState([]);
  const { goals: allGoals } = useStore();

  useEffect(() => {
    if (allGoals.length > 0) {
      setGoals(allGoals);
    }
  }, [allGoals]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const goalsData = await getGoals();
        setGoals(goalsData);
        useStore.setState({ goals: goalsData });
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    if (session) {
      fetchGoals();
    }
  }, [session]);

  return (
    <SessionProvider session={session}>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen p-4 gap-4">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}