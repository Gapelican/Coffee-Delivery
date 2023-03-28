import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { CheckForm, FormSectionContainer, PaymentMethodOptionsContainer } from "./styles";
import { Addressform } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CheckoutForm() {
  return (
    <CheckForm>
      <div className="title">Complete seu pedido</div>
      
      <FormSectionContainer>
          <SectionTitle 
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} />}
          />

          <Addressform />
      </FormSectionContainer>

      <FormSectionContainer>
          <SectionTitle 
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a form que deseja pagar"
            icon={<CurrencyDollar size={22} className="dollar"/>}
          />


        <PaymentMethodOptions />
      </FormSectionContainer>

    </CheckForm>
  )
}