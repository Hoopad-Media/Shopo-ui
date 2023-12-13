import Head from "next/head";
import React from "react";
import { PublicBaseUrl } from "../../../utils/apiRequest";
import settings from "../../../utils/settings";
function PageHead(props) {
  const { title } = props;
  const { favicon } = settings();
  const { metaDes } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDes} />
      <link
        rel="icon"
        href={`${favicon ? PublicBaseUrl + favicon : "/favico.svg"}`}
      />
    </Head>
  );
}

export default PageHead;
