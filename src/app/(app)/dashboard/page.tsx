import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Package, Book, Crown } from "lucide-react"
import AddProductButton from "@/components/add-product-button"

const kpiCards = [
  {
    title: "Total Products",
    value: "0",
    subtitle: "Currently Available",
    icon: <Package className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Library Items",
    value: "0",
    subtitle: "Added Resources",
    icon: <Book className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Plan",
    value: "Free",
    subtitle: "Limited Access",
    icon: <Crown className="h-6 w-6 text-muted-foreground" />,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
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
        <Card className="border-2 border-dashed shadow-none">
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4 py-16">
            <CardDescription className="max-w-sm text-center">
              No products yet. Add your first one to get started.
            </CardDescription>
            <AddProductButton />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
