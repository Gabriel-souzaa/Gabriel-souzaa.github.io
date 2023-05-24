import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  company,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <h5>Empresa: {company}</h5>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
