import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import User from "../../../../models/User";

export async function GET() {
  try {
    await dbConnect();
    const dbUsers = await User.find({}).sort({ createdAt: -1 });

    interface DBUser {
      _id: { toString(): string };
      name: string;
      email: string;
      role?: string;
      createdAt?: Date;
    }

    const formattedUsers = dbUsers.map((u: DBUser) => ({
      id: u._id.toString(),
      name: u.name,
      email: u.email,
      role: u.role || "Customer",
      joinedDate: u.createdAt ? new Date(u.createdAt).toISOString().split("T")[0] : "2026-06-15",
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { id, role } = await req.json();

    if (!id || !role) {
      return NextResponse.json({ error: "Missing id or role" }, { status: 400 });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Failed to update user role:", error);
    return NextResponse.json({ error: "Failed to update user role" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user id" }, { status: 400 });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
