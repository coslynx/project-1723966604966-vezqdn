"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useStore } from "@/store";
import { createGoal } from "@/utils/formatData";
import { GoalType } from "@/types/goal";

interface GoalFormProps {
  editGoal?: {
    id: number;
    name: string;
    type: GoalType;
    target: number;
    deadline: Date;
  };
}

export default function GoalForm({ editGoal }: GoalFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: editGoal
      ? {
          name: editGoal.name,
          type: editGoal.type,
          target: editGoal.target,
          deadline: editGoal.deadline,
        }
      : {},
  });
  const { setAuthModalOpen } = useStore();

  const onSubmit = async (data) => {
    try {
      const goalData = {
        name: data.name,
        type: data.type,
        target: data.target,
        deadline: data.deadline,
      };

      if (editGoal) {
        await createGoal(editGoal.id, goalData);
        toast.success("Goal updated successfully!");
      } else {
        await createGoal(goalData);
        toast.success("Goal created successfully!");
      }
    } catch (error) {
      console.error("Error creating goal:", error);
      toast.error("Failed to create/update goal");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="name" className="text-gray-700 font-medium">
          Goal Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Goal name is required",
          })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="type" className="text-gray-700 font-medium">
          Goal Type
        </label>
        <select
          id="type"
          {...register("type", {
            required: "Goal type is required",
          })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={GoalType.WEIGHT_LOSS}>Weight Loss</option>
          <option value={GoalType.MUSCLE_GAIN}>Muscle Gain</option>
          <option value={GoalType.ENDURANCE}>Endurance</option>
          <option value={GoalType.FLEXIBILITY}>Flexibility</option>
          <option value={GoalType.CUSTOM}>Custom</option>
        </select>
        {errors.type && (
          <span className="text-red-500 text-sm">{errors.type.message}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="target" className="text-gray-700 font-medium">
          Target
        </label>
        <input
          type="number"
          id="target"
          {...register("target", {
            required: "Target is required",
          })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.target && (
          <span className="text-red-500 text-sm">{errors.target.message}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="deadline" className="text-gray-700 font-medium">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          {...register("deadline", {
            required: "Deadline is required",
          })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.deadline && (
          <span className="text-red-500 text-sm">
            {errors.deadline.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {editGoal ? "Update Goal" : "Create Goal"}
      </button>
    </form>
  );
}