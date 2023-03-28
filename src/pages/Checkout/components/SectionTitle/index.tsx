import { ReactNode } from "react";
import { SectionTittleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({title, subtitle, icon} : SectionTitleProps) {
  return (
    <SectionTittleContainer>
      {icon}
      <div>
        <div className="title-section">{title}</div>
        <div className="subtitle-section">{subtitle}</div>
      </div>
    </SectionTittleContainer>
  )
}