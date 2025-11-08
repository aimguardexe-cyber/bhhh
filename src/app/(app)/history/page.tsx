
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
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

const paymentHistory = [
  {
    id: "pay_1",
    date: new Date(),
    product: "Android Control Panel",
    amount: "₹499",
    status: "Paid",
  },
  {
    id: "pay_2",
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    product: "Modern Code Snippets",
    amount: "₹299",
    status: "Paid",
  },
  {
    id: "pay_3",
    date: new Date(new Date().setDate(new Date().getDate() - 12)),
    product: "Desktop Control Panel",
    amount: "₹999",
    status: "Refunded",
  },
    {
    id: "pay_4",
    date: new Date(new Date().setDate(new Date().getDate() - 20)),
    product: "Android Control Panel",
    amount: "₹499",
    status: "Paid",
  },
]

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>
            Here is a list of your recent transactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead className="hidden sm:table-cell">Product</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div className="font-medium">
                      {format(payment.date, "PPP")}
                    </div>
                    <div className="block sm:hidden text-muted-foreground text-sm">
                      {payment.product}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{payment.product}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      variant={payment.status === "Paid" ? "outline" : "secondary"}
                      className={
                        payment.status === "Paid"
                          ? "text-green-600 border-green-600"
                          : ""
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{payment.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
