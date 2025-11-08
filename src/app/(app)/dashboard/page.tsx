import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Book, Crown, ShoppingCart } from "lucide-react"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Chatbot from "@/components/chatbot"

const kpiCards = [
  {
    title: "Total Products",
    value: "2",
    subtitle: "In your library",
    icon: <Package className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Total Spent",
    value: "₹798",
    subtitle: "On all products",
    icon: <ShoppingCart className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Plan",
    value: "Free",
    subtitle: "Limited Access",
    icon: <Crown className="h-6 w-6 text-muted-foreground" />,
  },
]

const recentPurchases = [
    {
        id: "panel-android",
        name: "Android Control Panel",
        price: "₹499",
        status: "Completed",
    },
    {
        id: "codes",
        name: "Modern Code Snippets",
        price: "₹299",
        status: "Completed",
    }
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">

        <Card className="bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle>Welcome to your Dashboard, Lokesh!</CardTitle>
                <CardDescription>
                    You can manage your products and view your purchase history here. Explore the products to get started.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/products">Explore Products</Link>
                </Button>
            </CardContent>
        </Card>
      
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kpiCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Purchases</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="hidden sm:table-cell">Price</TableHead>
                        <TableHead className="hidden sm:table-cell">Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentPurchases.map((purchase) => (
                        <TableRow key={purchase.id}>
                            <TableCell>
                                <div className="font-medium">{purchase.name}</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">{purchase.price}</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge variant="outline" className="text-green-600 border-green-600">{purchase.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/library">View in Library</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <Chatbot />
    </div>
  )
}
