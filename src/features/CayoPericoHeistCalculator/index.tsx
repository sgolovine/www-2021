import { Calculator as CalculatorComponent } from "./Calculator"
import { PayoutContextProvider } from "./CalculatorContext"
import { AppSEO } from "./components/SEO"

export const Calculator = () => (
  <>
    <AppSEO />
    <PayoutContextProvider>
      <CalculatorComponent />
    </PayoutContextProvider>
  </>
)
