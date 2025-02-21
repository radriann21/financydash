"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { ArrowRightToLine } from "lucide-react"
import { useUserStore } from "../providers/userStoreProvider"
import { groupTransactions } from "../utils/groupTransactions"

export const IncomesExpensesComponent = () => {

  const transactions = useUserStore((state) => state.user?.transactions)
  const chartData = groupTransactions(transactions || [])

  const chartConfig = {
    desktop: {
      label: "Income",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Expense",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
<Card className="col-span-2 row-span-1 h-full bg-[#151518] flex flex-col space-y-4 font-geistSans">
  <CardHeader>
    <CardTitle className="text-xl">Incomes and Expenses</CardTitle>
  </CardHeader>
  <CardContent className="flex-1 overflow-hidden">
    <ChartContainer className="h-full w-full" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={9}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Area
          dataKey="income"
          type="natural"
          fill="var(--color-mobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          stackId="a"
        />
        <Area
          dataKey="expense"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)" 
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex justify-end">
    <Button className="text-[12px] font-bold">
      <ArrowRightToLine className="mr-2" /> 
      View more
    </Button>
  </CardFooter>
</Card>
  )
}