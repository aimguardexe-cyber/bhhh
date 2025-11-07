
"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { KeyRound, User, Lock, Youtube, Download, Copy, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const purchasedProducts = [
  {
    id: "panel-android",
    name: "Android Control Panel",
    tags: ["Android", "SaaS", "Admin"],
    credentials: {
      key: "ANDROID-USER-A1B2-C3D4-E5F6",
      user: "user@coderyn.com",
      pass: "p@ssw0rd123!",
    },
    tutorialUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    downloadUrl: "#",
  },
  {
    id: "codes",
    name: "Modern Code Snippets",
    tags: ["Web Dev", "React", "Snippets"],
    credentials: {
      key: "SNIPPETS-USER-F6E5-D4C3-B2A1",
      user: "user@coderyn.com",
      pass: "p@ssw0rd123!",
    },
    tutorialUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    downloadUrl: "#",
  },
]

type Product = (typeof purchasedProducts)[0]

export default function LibraryPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { toast } = useToast()

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    toast({
        title: "Copied to clipboard",
        description: `${field} has been copied.`,
    })
  }

  return (
    <>
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
          <Card>
              <CardContent className="p-0">
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead>Product</TableHead>
                              <TableHead className="hidden md:table-cell">Credentials</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {purchasedProducts.map((product) => (
                              <TableRow key={product.id}>
                                  <TableCell>
                                      <div className="font-medium">{product.name}</div>
                                      <div className="flex gap-1 pt-1">
                                          {product.tags.map(tag => (
                                              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                          ))}
                                      </div>
                                  </TableCell>
                                  <TableCell className="hidden md:table-cell">
                                      <div className="flex items-center gap-2">
                                          <KeyRound className="h-4 w-4 text-muted-foreground" />
                                          <span className="font-mono text-sm">{product.credentials.key}</span>
                                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleCopy(product.credentials.key, 'Key')}>
                                              <Copy className="h-3 w-3" />
                                          </Button>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <User className="h-4 w-4 text-muted-foreground" />
                                          <span className="font-mono text-sm">{product.credentials.user}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <Lock className="h-4 w-4 text-muted-foreground" />
                                          <span className="font-mono text-sm">{product.credentials.pass}</span>
                                      </div>
                                  </TableCell>
                                  <TableCell className="text-right">
                                      <div className="hidden md:flex items-center justify-end gap-2">
                                          <Button asChild variant="outline" size="sm">
                                              <a href={product.tutorialUrl} target="_blank" rel="noopener noreferrer">
                                                  <Youtube className="mr-2 h-4 w-4" />
                                                  Tutorial
                                              </a>
                                          </Button>
                                          <Button asChild size="sm">
                                              <a href={product.downloadUrl} download>
                                                  <Download className="mr-2 h-4 w-4" />
                                                  Download
                                              </a>
                                          </Button>
                                      </div>
                                      <div className="md:hidden">
                                          <DropdownMenu>
                                              <DropdownMenuTrigger asChild>
                                                  <Button variant="ghost" size="icon">
                                                      <MoreHorizontal />
                                                  </Button>
                                              </DropdownMenuTrigger>
                                              <DropdownMenuContent align="end">
                                                  <DropdownMenuItem onSelect={() => setSelectedProduct(product)}>View Credentials</DropdownMenuItem>
                                                  <DropdownMenuItem asChild>
                                                      <a href={product.tutorialUrl} target="_blank" rel="noopener noreferrer">
                                                          Watch Tutorial
                                                      </a>
                                                  </DropdownMenuItem>
                                                  <DropdownMenuItem asChild>
                                                       <a href={product.downloadUrl} download>
                                                          Download
                                                      </a>
                                                  </DropdownMenuItem>
                                              </DropdownMenuContent>
                                          </DropdownMenu>
                                      </div>
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>
              Your credentials for this product.
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                      <p className="text-xs text-muted-foreground">License Key</p>
                      <p className="font-mono text-sm">{selectedProduct.credentials.key}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(selectedProduct.credentials.key, 'Key')}>
                      <Copy className="h-4 w-4" />
                  </Button>
              </div>
              <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                   <div>
                      <p className="text-xs text-muted-foreground">Username/Email</p>
                      <p className="font-mono text-sm">{selectedProduct.credentials.user}</p>
                   </div>
              </div>
              <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                   <div>
                      <p className="text-xs text-muted-foreground">Password</p>
                      <p className="font-mono text-sm">{selectedProduct.credentials.pass}</p>
                   </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
