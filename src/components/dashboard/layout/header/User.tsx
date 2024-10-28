import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getInitials } from "@/lib/utils";

const User = async () => {
  const user = await currentUser();

  return (
    <div className="flex gap-2">
      {!user ? (
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex md:hidden flex-col gap-1">
            <Skeleton className="h-3 w-[150px]" />
            <Skeleton className="h-3 w-[120px]" />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link href="/dashboard/user-profile">
            <Avatar className="size-8">
              <AvatarImage src={user.imageUrl} alt="user avatar" />
              <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex md:hidden flex-col">
            <p className="font-semibold leading-4">{user.firstName}</p>
            <p className="text-sm">{user.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
