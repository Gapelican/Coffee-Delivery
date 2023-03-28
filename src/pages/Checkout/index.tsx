import { CheckoutForm } from "./components/CheckoutForm";
import { CompleteOrderContainer } from "./styles";

export function Checkout() {
  return (
    <CompleteOrderContainer className="container-master">
      <CheckoutForm />
    </CompleteOrderContainer>
  )
}