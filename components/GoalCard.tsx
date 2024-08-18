"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatData";
import { GoalType } from "@/types/goal";

interface GoalCardProps {
  goal: {
    id: number;
    name: string;
    type: GoalType;
    target: number;
    deadline: Date;
    progressData: {
      date: Date;
      value: number;
    }[];
  };
}

export default function GoalCard({ goal }: GoalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getProgress = () => {
    const { progressData } = goal;
    if (progressData.length === 0) return 0;

    const latestDataPoint = progressData[progressData.length - 1];
    const targetPercentage = (latestDataPoint.value / goal.target) * 100;
    return Math.round(targetPercentage);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 mb-4 ${
        isExpanded ? "h-auto" : "h-32"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{goal.name}</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4.183 4.183a1 1 0 01-1.414 0l-4.183-4.183a1 1 0 011.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 10.293a1 1 0 011.414 0l4.183 4.183a1 1 0 010 1.414l-4.183 4.183a1 1 0 01-1.414 0l-4.183-4.183a1 1 0 010-1.414l4.183-4.183a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="mb-2">
        <p className="text-gray-500 text-sm">
          Type:{" "}
          {goal.type === GoalType.WEIGHT_LOSS
            ? "Weight Loss"
            : goal.type === GoalType.MUSCLE_GAIN
            ? "Muscle Gain"
            : goal.type === GoalType.ENDURANCE
            ? "Endurance"
            : goal.type === GoalType.FLEXIBILITY
            ? "Flexibility"
            : "Custom"}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            Progress: {getProgress()}%
          </p>
          <p className="text-gray-500 text-sm">
            Target: {goal.target}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            Deadline: {formatDate(goal.deadline)}
          </p>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Progress Data:
          </p>
          <ul>
            {goal.progressData.map((dataPoint) => (
              <li key={dataPoint.date.toString()} className="text-gray-500">
                {formatDate(dataPoint.date)}: {dataPoint.value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link href={`/goals/${goal.id}`} className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Goal
        </button>
      </Link>
    </div>
  );
}