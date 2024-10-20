import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import { useState } from "react"
import { Login } from "../../features/user/login"
import { Register } from "../../features/user/register"
import { useAuthGuard } from "../../hooks/useAuthGuard"

export const Auth = () => {
  const [selected, setSelected] = useState("login")

  useAuthGuard()

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to Flick.
        </h1>
        <Card className="max-w-full w-[340px] h-[450px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key="login" title="Login">
                <Login setSelected={setSelected} />
              </Tab>
              <Tab key="sign-up" title="Register">
                <Register setSelected={setSelected} />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
