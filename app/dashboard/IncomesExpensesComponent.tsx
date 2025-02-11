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

export const IncomesExpensesComponent = () => {
  const chartData = [
    { month: "January", income: 186, expense: 80 },
    { month: "February", income: 305, expense: 200 },
    { month: "March", income: 237, expense: 120 },
    { month: "April", income: 73, expense: 190 },
    { month: "May", income: 209, expense: 130 },
    { month: "June", income: 214, expense: 140 },
    { month: "July", income: 96, expense: 80 },
    { month: "August", income: 184, expense: 200 },
    { month: "September", income: 93, expense: 120 },
    { month: "October", income: 209, expense: 190 },
    { month: "November", income: 124, expense: 130 },
    { month: "December", income: 214, expense: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
    <Card className="col-span-2 row-span-1 h-fit">
      <CardHeader>
        <CardTitle className="text-xl">Incomes and Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="max-h-[220px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis 
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={9}
              tickFormatter={(value) => value.slice(0,3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot"/>} />
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
      <CardFooter>
        <Button className="font-bold">
          <ArrowRightToLine />
          View more
        </Button>
      </CardFooter>
    </Card>
  )
}