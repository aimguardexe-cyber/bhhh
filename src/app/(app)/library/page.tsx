
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { KeyRound, User, Lock, Youtube } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const purchasedProducts = [
  {
    id: "panel-android",
    name: "Android Control Panel",
    imageUrl: "https://picsum.photos/seed/panel-android/600/400",
    imageHint: "dashboard interface",
    tags: ["Android", "SaaS", "Admin"],
    credentials: {
      key: "ANDROID-USER-A1B2-C3D4-E5F6",
      user: "user@coderyn.com",
      pass: "p@ssw0rd123!",
    },
    tutorialUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "codes",
    name: "Modern Code Snippets",
    imageUrl: "https://picsum.photos/seed/codes/600/400",
    imageHint: "code editor",
    tags: ["Web Dev", "React", "Snippets"],
    credentials: {
      key: "SNIPPETS-USER-F6E5-D4C3-B2A1",
      user: "user@coderyn.com",
      pass: "p@ssw0rd123!",
    },
    tutorialUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

const credentialIcons = {
  key: <KeyRound className="h-5 w-5 text-muted-foreground" />,
  user: <User className="h-5 w-5 text-muted-foreground" />,
  pass: <Lock className="h-5 w-5 text-muted-foreground" />,
}

export default function LibraryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Your Library</h1>
          <p className="text-muted-foreground">
            Here are the products you have purchased.
          </p>
        </div>
      </div>
      {purchasedProducts.length === 0 ? (
        <Card className="border-2 border-dashed shadow-none">
            <CardHeader>
                <CardTitle>Your library is empty</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4 py-16">
                <CardDescription className="max-w-sm text-center">
                    Looks like you haven&apos;t purchased any products yet.
                </CardDescription>
                <Button variant="outline">Explore Products</Button>
            </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {purchasedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                    />
                </div>
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex gap-2 pt-1">
                        {product.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Your Credentials</h3>
                        <div className="space-y-3 rounded-md border bg-muted/30 p-4">
                            <div className="flex items-center gap-3">
                                {credentialIcons.key}
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground">License Key</span>
                                    <span className="font-mono text-sm">{product.credentials.key}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {credentialIcons.user}
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground">Username</span>
                                    <span className="font-mono text-sm">{product.credentials.user}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {credentialIcons.pass}
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground">Password</span>
                                    <span className="font-mono text-sm">{product.credentials.pass}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <a href={product.tutorialUrl} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2" />
                            Watch Tutorial
                        </a>
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
      )}
    </div>
  )
}
