"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { useAvatarStore } from "@/providers/avatar-store-provider";
import { useState } from "react";

export default function DashboardHeader() {
  const { setUid } = useAvatarStore((state) => state);
  const [email, setEmail] = useState<string | undefined>(undefined);
  // const [name, setName] = useState<string | undefined>(undefined);

  const fetchUser = async () => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    setEmail(user.data.user?.email);
    // setName(user.data.user?.user_metadata?.);
    setUid(user.data.user?.id || null);
  };

  fetchUser();

  const onLogOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUid(null);

    redirect("/login");
  };

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard">
          <h1 className="text-2xl font-serif font-bold">StyleMe</h1>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/images/abstract-geometric-shapes.png"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                {/* <p className="text-sm font-medium leading-none">{name}</p> */}
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogOut} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
