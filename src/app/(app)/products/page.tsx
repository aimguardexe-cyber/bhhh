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
import AddProductButton from "@/components/add-product-button"

const products = [
  {
    id: "panel-android",
    name: "Android Control Panel",
    description: "A powerful and intuitive control panel for managing your Android applications. Features include real-time analytics, user management, and push notifications.",
    imageUrl: "https://picsum.photos/seed/panel-android/600/400",
    imageHint: "dashboard interface",
    tags: ["Android", "SaaS", "Admin"],
  },
  {
    id: "pc-panel",
    name: "Desktop Control Panel",
    description: "The ultimate desktop solution for monitoring and controlling your software services. Cross-platform compatibility with Windows, macOS, and Linux.",
    imageUrl: "https://picsum.photos/seed/pc-panel/600/400",
    imageHint: "desktop application",
    tags: ["Desktop", "Software", "Utility"],
  },
  {
    id: "codes",
    name: "Modern Code Snippets",
    description: "A curated library of modern, reusable code snippets for web development. Covers React, Next.js, and Tailwind CSS for rapid prototyping.",
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
          <h1 className="text-2xl font-bold">Your Products</h1>
          <p className="text-muted-foreground">
            Manage and view all your created products.
          </p>
        </div>
        <AddProductButton />
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
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
