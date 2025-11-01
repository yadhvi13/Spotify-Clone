import { Button } from "@/components/ui/button"
import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'


const App = () => {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton>
            <Button variant={"destructive"}> Sign In </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  )
}

export default App
