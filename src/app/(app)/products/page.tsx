import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart } from "lucide-react"

const products = [
  {
    id: "panel-android",
    name: "Android Control Panel",
    features: [
      "Real-time analytics",
      "User management",
      "Push notifications",
      "In-app purchases",
    ],
    price: "₹499",
    imageUrl: "https://picsum.photos/seed/panel-android/600/400",
    imageHint: "dashboard interface",
    tags: ["Android", "SaaS", "Admin"],
  },
  {
    id: "pc-panel",
    name: "Desktop Control Panel",
    features: [
      "Cross-platform (Win, macOS, Linux)",
      "System monitoring",
      "Remote access",
      "Automated tasks",
    ],
    price: "₹999",
    imageUrl: "https://picsum.photos/seed/pc-panel/600/400",
    imageHint: "desktop application",
    tags: ["Desktop", "Software", "Utility"],
  },
  {
    id: "codes",
    name: "Modern Code Snippets",
    features: [
      "React & Next.js snippets",
      "Tailwind CSS components",
      "TypeScript ready",
      "Easy integration",
    ],
    price: "₹299",
    imageUrl: "https://picsum.photos/seed/codes/600/400",
    imageHint: "code editor",
    tags: ["Web Dev", "React", "Snippets"],
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Our Products</h1>
          <p className="text-muted-foreground">
            Explore our range of powerful developer tools.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={product.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <div className="flex gap-2 mb-4">
                {product.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between">
              <p className="text-xl font-bold">{product.price}</p>
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
