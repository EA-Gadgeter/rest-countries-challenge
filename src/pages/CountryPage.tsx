import { useParams } from "react-router";

export const CountryPage = () => {
  const { id } = useParams();
  return <div>Country {id}</div>;
};