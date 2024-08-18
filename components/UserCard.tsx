"use client";

import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  name: string;
  profileImage: string;
}

export default function UserCard({ name, profileImage }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center gap-3">
        <Image
          src={profileImage}
          alt={`${name}'s profile`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link href={`/profile/${name}`}>
          <h3 className="text-lg font-medium">{name}</h3>
        </Link>
      </div>
    </div>
  );
}