import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  console.log(series, films);

  return <p>Hello from Browse page!</p>;
}
