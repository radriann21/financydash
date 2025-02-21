import { Card, CardContent,CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleEllipsis } from "lucide-react"
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useUserStore } from "../providers/userStoreProvider"
import { UserMenu } from "../utils/Menus"
import Link from "next/link"

export const UserCard = () => {

  const user = useUserStore((state) => state.user)

  return (
    <Card className="flex items-center justify-center px-2 bg-transparent h-full w-full font-geistSans">
      <CardContent className="flex items-center justify-center space-x-2 p-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="text-sm font-semibold">
          <p className="font-bold">{user?.username}</p>
          <span>user@gmail.com</span>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleEllipsis className="stroke-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {
                UserMenu.map((item, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer">
                    <Link className="inline-flex items-center" href={item.url}>
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}