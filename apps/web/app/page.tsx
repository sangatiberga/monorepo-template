import ClientSide from "./ClientSide"
import { trpc } from "./trpc"

export default async function Home() {
  const response = await trpc.hello.query({ name: "MonoRepo" })

  return (
    <div>
      <p>Server Side - {response}</p>
      <ClientSide />
    </div>
  )
}
