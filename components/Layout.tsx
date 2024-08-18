"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { getGoals } from "@/utils/formatData";
import { GoalCard, ProgressChart, Header } from "@/components";
import { UserCard } from "@/components/UserCard";
import { AuthModal } from "@/components/AuthModal";

export default function DashboardPage() {
  const [goals, setGoals] = useState([]);
  const { goals: allGoals, authModalOpen, setAuthModalOpen } = useStore();
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
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <h1 className="text-3xl font-bold">Your Fitness Dashboard</h1>
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
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Community Feed</h2>
            {/* Replace with actual social feed component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <UserCard
                name="John Doe"
                profileImage="https://lh3.googleusercontent.com/a/AATXAJx5hP_C-V6zYkK5hX66g2C74V-x58k5c6C72g=s96-c"
              />
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Please log in to see your dashboard.</p>
      )}
    </main>
  );
}