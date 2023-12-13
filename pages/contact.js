import React from "react";
import Contact from "../src/components/Contact/index";
import PageHead from "../src/components/Helpers/PageHead";
import { PublicBaseUrl } from "../utils/apiRequest";
export default function contactPage({ data }) {
  const { seoSetting } = data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Contact datas={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${PublicBaseUrl}api/contact-us`);
  const data = await res.json();
  return { props: { data } };
}
