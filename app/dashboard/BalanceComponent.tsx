import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightToLine } from "lucide-react"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const BalanceComponent = () => {

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  
  const monthlyBalanceMock = [
    {name: "January", value: 500},
    {name: "February", value: 700},
    {name: "March", value: 300},
    {name: "April", value: 900},
    {name: "May", value: 700},
    {name: "June", value: 200},
    {name: "July", value: 900},
    {name: "August", value: 500},
    {name: "September", value: 500},
    {name: "October", value: 700},
    {name: "November", value: 300},
    {name: "December", value: 800},
  ]
  

  return (
    <Card className="col-span-2 row-span-1 h-fit">
      <CardHeader>
        <CardTitle className="text-2xl">Actual Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="max-h-[220px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={monthlyBalanceMock}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis 
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={9}
              tickFormatter={(value) => value.slice(0,3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel /> } />
            <Line dataKey="value" type="linear" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <Button className="font-semibold">
          View Full Balance
          <ArrowRightToLine className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}