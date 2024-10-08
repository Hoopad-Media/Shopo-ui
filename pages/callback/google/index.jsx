import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import LoaderStyleOne from "../../../src/components/Helpers/Loaders/LoaderStyleOne";
import { fetchWishlist } from "../../../src/store/wishlistData";
import { PublicBaseUrl } from "../../../utils/apiRequest";

function Index() {
  const route = useRouter();
  const dispatch = useDispatch();
  const [res, setRes] = useState(true);
  useEffect(() => {
    if (res) {
      if (route && route.query) {
        axios
          .get(
            `${PublicBaseUrl}api/callback/google?authuser=${route.query.authuser}&code=${route.query.code}&prompt=${route.query.prompt}&scope=${route.query.scope}`
          )
          .then((res) => {
            localStorage.removeItem("auth");
            localStorage.setItem("auth", JSON.stringify(res.data));
            dispatch(fetchWishlist());
            route.push("/");
            if (res) {
              setRes(true);
            }
            toast.success("Login Successfull");
          })
          .catch((er) => {
            setRes(true);
            console.log(er);
          });
      }
    } else {
      return false;
    }
  }, [res]);
  return (
    <>
      <div
        className="w-full h-screen bg-black bg-opacity-70 flex justify-center items-center relative"
        style={{ zIndex: 9999999999999999 }}
      >
        <LoaderStyleOne />
      </div>
    </>
  );
}

export default Index;
