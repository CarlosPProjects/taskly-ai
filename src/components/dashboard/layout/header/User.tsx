import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getInitials } from "@/lib/utils";

const User = async () => {
  const user = await currentUser();

  return !user ? (
    <Skeleton className="size-8 rounded-full" />
  ) : (
    <Link href="/dashboard/user-profile">
      <Avatar className="size-8 rounded-md">
        <AvatarImage src={user.imageUrl} alt="user avatar" />
        <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default User;
