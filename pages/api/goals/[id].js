"use server";

import { prisma } from "@/prisma/client";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const goal = await prisma.goal.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!goal) {
      return new Response("Goal not found", { status: 404 });
    }

    return new Response(JSON.stringify(goal), { status: 200 });
  } catch (error) {
    console.error("Error fetching goal:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();

  try {
    const updatedGoal = await prisma.goal.update({
      where: {
        id: parseInt(id),
      },
      data: body,
    });

    return new Response(JSON.stringify(updatedGoal), { status: 200 });
  } catch (error) {
    console.error("Error updating goal:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await prisma.goal.delete({
      where: {
        id: parseInt(id),
      },
    });

    return new Response("Goal deleted successfully", { status: 204 });
  } catch (error) {
    console.error("Error deleting goal:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}