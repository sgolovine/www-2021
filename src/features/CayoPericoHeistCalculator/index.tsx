import { Calculator as CalculatorComponent } from "./Calculator"
import { PayoutContextProvider } from "./CalculatorContext"

export const Calculator = () => (
  <PayoutContextProvider>
    <CalculatorComponent />
  </PayoutContextProvider>
)
