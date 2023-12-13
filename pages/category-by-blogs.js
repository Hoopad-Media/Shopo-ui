import React from "react";
import Blogs from "../src/components/Blogs";
import { PublicBaseUrl } from "../utils/apiRequest";

function categoryByBlogs({ data }) {
  return (
    <>
      <Blogs blogs={data.blogs.data} />
    </>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${PublicBaseUrl}api/blog?category=${context.query.category}`
  );
  const data = await res.json();
  return { props: { data } };
}
export default categoryByBlogs;
