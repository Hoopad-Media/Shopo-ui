import React from "react";
import PageHead from "../src/components/Helpers/PageHead";
import TermsCondition from "../src/components/SellerTermsCondition/index";
import { PublicBaseUrl } from "../utils/apiRequest";
export default function termsConditionPage({ data }) {
  return (
    <>
      <PageHead title="Terms and Conditions" />
      <TermsCondition datas={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${PublicBaseUrl}api/seller-terms-conditoins`);
  const data = await res.json();
  return { props: { data } };
}
