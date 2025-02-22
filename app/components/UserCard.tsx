import { useState } from "react"
import { LogOut, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUserStore } from "../providers/userStoreProvider"
import { redirect } from "next/navigation"
import Link from "next/link"

export const UserCard = () => {
  const user = useUserStore((state) => state.user)
  const changeUserName = useUserStore((state) => state.changeUserName)
  const deleteUser = useUserStore((state) => state.deleteUser)

  const [username, setUsername] = useState(user?.username || "")
  const [isEditing, setIsEditing] = useState(false)
  const [newUsername, setNewUsername] = useState(username)

  const handleUsernameChange = () => {
    setUsername(newUsername)
    changeUserName(newUsername)
    setIsEditing(false)
  }

  const handleDeleteAccount = () => {
    deleteUser()
    redirect("/")
  }

  return (
    <Dialog>
      <DialogTrigger className="transition-all duration-300 ease-in-out hover:bg-slate-700/20 cursor-pointer rounded-md font-geistSans" asChild>
        <div className="w-full p-1 flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-green-800">{user?.username?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <span className="block text-sm">{user?.username}</span>
            <span className="text-[11px]">user@email.com</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1A1A1A] border-[#333]">
        <DialogHeader>
          <DialogTitle className="text-white">User Settings</DialogTitle>
          <DialogDescription className="text-slate-400">Manage your account settings.</DialogDescription>
        </DialogHeader>
        <div className="mt-2 w-full space-y-6">
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            {isEditing ? (
              <div className="flex gap-2">
                <Input
                  id="username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="bg-[#222] border-0 text-white"
                />
                <Button onClick={handleUsernameChange} className="bg-[#333] hover:bg-[#444] text-white">
                  Save
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-gray-300">{username}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="bg-[#222] hover:bg-[#333] text-white border-0"
                >
                  <User className="h-4 w-4 mr-2" />
                  Edit Username
                </Button>
              </div>
            )}
          </div>

          <Separator className="bg-[#333]" />

          <div className="space-y-2">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full bg-[#222] hover:bg-[#333] text-white border-0 justify-start"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  LogOut
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-[#222] hover:bg-red-950 text-red-500 border-0 justify-start"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#1A1A1A] border-[#333]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Are you sure about this action?</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    This action cannot be undone. You will loss all your data, including transactions, accounts, and goals.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-[#222] hover:bg-[#333] text-white border-0">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    className="bg-red-600 hover:bg-red-700 text-white border-0"
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}