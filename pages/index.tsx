"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { getGoals } from "@/utils/formatData";
import { GoalCard, ProgressChart } from "@/components";

export default function HomePage() {
  const [goals, setGoals] = useState([]);
  const { goals: allGoals } = useStore();
  const { data: session } = useSession();

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
    <main className="flex flex-col items-center justify-start min-h-screen p-4 gap-4">
      <h1 className="text-3xl font-bold">Welcome to Fitness Hub!</h1>
      <p className="text-lg text-gray-600">
        Track your fitness goals and stay motivated with our supportive community.
      </p>
      {session ? (
        <>
          {goals.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {goals.map((goal) => (
                  <GoalCard key={goal.id} goal={goal} />
                ))}
              </div>
              <ProgressChart />
            </>
          ) : (
            <p className="text-gray-500">No goals yet. Start tracking your progress today!</p>
          )}
        </>
      ) : (
        <p className="text-gray-500">Please log in to see your goals and progress.</p>
      )}
    </main>
  );
}