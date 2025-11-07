
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Shield, CalendarDays, UserCircle } from "lucide-react"

const user = {
  name: "Lokesh Prajapat",
  email: "lk07062005@gmail.com",
  role: "App Owner",
  memberSince: "November 3, 2025",
  status: "Active",
  initials: "LP"
}

const infoCards = [
  {
    icon: <Mail className="h-5 w-5 text-muted-foreground" />,
    label: "Email",
    value: user.email,
  },
  {
    icon: <Shield className="h-5 w-5 text-muted-foreground" />,
    label: "Role",
    value: user.role,
  },
  {
    icon: <CalendarDays className="h-5 w-5 text-muted-foreground" />,
    label: "Member Since",
    value: user.memberSince,
  },
  {
    icon: <UserCircle className="h-5 w-5 text-muted-foreground" />,
    label: "Status",
    value: user.status,
  },
]

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>View your account information and platform statistics.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Avatar className="h-24 w-24 text-3xl">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.initials.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 pt-2">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <Badge variant="outline" className="mt-2 w-fit">{user.role}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {infoCards.map((card) => (
              <Card key={card.label} className="bg-secondary/30 dark:bg-secondary/10">
                <CardContent className="flex items-center gap-4 p-4">
                  {card.icon}
                  <div>
                    <p className="text-sm font-medium">{card.label}</p>
                    <p className="text-sm text-muted-foreground">{card.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
