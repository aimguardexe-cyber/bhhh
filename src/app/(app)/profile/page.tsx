
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Shield, CalendarDays, UserCircle, KeyRound, Crown } from "lucide-react"

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

const quickStats = [
  {
    value: "0",
    label: "Total Apps",
    color: "text-blue-500",
  },
  {
    value: "Unpaid",
    label: "Payment Status",
    color: "text-green-500",
  },
  {
    value: "No",
    label: "Premium Access",
    color: "text-orange-500",
  },
];


export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>View your account information and platform statistics.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Avatar className="h-24 w-24 text-3xl">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.initials}
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
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quickStats.map((stat) => (
            <Card key={stat.label} className="bg-secondary/30 dark:bg-secondary/10 text-center">
              <CardContent className="p-6">
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Button variant="outline" className="justify-start h-12">
              <KeyRound className="mr-2" /> Change Password
            </Button>
            <Button variant="outline" className="justify-start h-12">
              <Mail className="mr-2" /> Update Email
            </Button>
          </div>
          <div className="rounded-lg bg-secondary/30 dark:bg-secondary/10 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Crown />
              </div>
              <div>
                <h3 className="font-semibold">Upgrade to Premium</h3>
                <p className="text-sm text-muted-foreground">Get unlimited apps, licenses, and resellers with premium features.</p>
              </div>
            </div>
            <Button>Upgrade Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
