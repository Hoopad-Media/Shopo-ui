import React from "react";
import PageHead from "../src/components/Helpers/PageHead";
import Layout from "../src/components/Partials/Layout";
import Sellers from "../src/components/Sellers/index";
import { PublicBaseUrl } from "../utils/apiRequest";
export default function SellersPage(data) {
  const { seoSetting } = data.data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Layout childrenClasses="pt-0 pb-0">
        <Sellers sellersData={data.data} />
      </Layout>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(`${PublicBaseUrl}api/sellers`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
