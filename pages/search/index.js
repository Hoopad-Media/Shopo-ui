import React from "react";
import AllProductPage from "../../src/components/AllProductPage/index";
import PageHead from "../../src/components/Helpers/PageHead";
import { PublicBaseUrl } from "../../utils/apiRequest";

export default function allproductsPage(data) {
  return (
    <>
      <PageHead title="search | products" />
      <AllProductPage response={data} />
    </>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${PublicBaseUrl}api/product?${
      context.query.search
        ? `search=${context.query.search}`
        : context.query.category && context.query.search
        ? `search=${context.query.search}&categories[]=${context.query.category}`
        : `search=${context.query.search}`
    }`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
