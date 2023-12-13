import PageHead from "../src/components/Helpers/PageHead";
import { PublicBaseUrl } from "../utils/apiRequest";
import Home from "./../src/components/Home/index";

export default function HomePage({ data }) {
  const { seoSetting } = data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Home homepageData={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${PublicBaseUrl}api/`);
  const data = await res.json();
  return { props: { data } };
}
