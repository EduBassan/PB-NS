import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  const atletas = JSON.parse(localStorage.getItem("jogadoras"));
  const clubes = JSON.parse(localStorage.getItem("times"));
  const pedidos = JSON.parse(localStorage.getItem("pedidos"))
  const pedidosTimes = JSON.parse(localStorage.getItem("pedidosTimes"))
  const porcentagemAtletas = atletas.length * 100
  const porcentagemClubes = clubes.length * 100
  const porcentagemPedidos = pedidos.length * 100
  const porcentagemPedidosTimes = pedidosTimes.length * 100

  return (
    <div
      className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de atletas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {atletas.length}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {porcentagemAtletas}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            A comunidade está crescendo <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {atletas.length} atletas e contando! 🏆
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de times</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {clubes.length}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {porcentagemClubes}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Atenção, chefes de equipe <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            já temos {clubes.length} times prontos pra brilhar! 🌟
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pedidos pendentes ( Atletas )</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {pedidos.length}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {porcentagemPedidos}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pedidos em alta! <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">{pedidos.length} atletas querendo mostrar serviço! 💪</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pedidos pendentes ( Times )</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {pedidosTimes.length}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {porcentagemPedidosTimes}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Os times estão se formando <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Já temos {pedidosTimes.length} pedidos esperando aprovação! 🏗️</div>
        </CardFooter>
      </Card>
    </div>
  );
}
