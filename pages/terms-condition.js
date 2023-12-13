import React from "react";
import PageHead from "../src/components/Helpers/PageHead";
import TermsCondition from "../src/components/TermsCondition/index";
import { PublicBaseUrl } from "../utils/apiRequest";
export default function termsConditionPage({ data }) {
  return (
    <>
      <PageHead title="Term and Conditions" />
      <TermsCondition datas={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${PublicBaseUrl}api/terms-and-conditions`);
  const data = await res.json();
  return { props: { data } };
}
