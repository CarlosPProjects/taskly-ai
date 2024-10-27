import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getInitials } from "@/lib/utils";

const User = async () => {
  const user = await currentUser();

  return (
    <Link href="/dashboard/user-profile">
      <Avatar>
        {!user ? (
          <Skeleton className="h-12 w-12 rounded-full" />
        ) : (
          <>
            <AvatarImage src={user.imageUrl} alt="@shadcn" />
            <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
          </>
        )}
      </Avatar>
    </Link>
  );
};

export default User;
