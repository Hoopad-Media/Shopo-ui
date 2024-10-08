import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiRequest, { PublicBaseUrl } from "../../../utils/apiRequest";
import DiscountBanner from "../DiscountBanner";
import Drawer from "../Mobile/Drawer";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";
export default function Layout({ children, childrenClasses }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [settings, setSettings] = useState(null);
  const [subscribeData, setSubScribeDAta] = useState(null);
  const [contact, setContact] = useState(null);
  useEffect(() => {
    if (!subscribeData) {
      axios
        .get(`${PublicBaseUrl}api/`)
        .then((res) => {
          if (res.data) {
            setSubScribeDAta(res.data.subscriptionBanner);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [subscribeData]);

  useEffect(() => {
    if (websiteSetup) {
      setSettings(websiteSetup.payload.setting);
    }
  }, [websiteSetup]);
  useEffect(() => {
    if (!contact) {
      apiRequest
        .contactUs()
        .then((res) => {
          if (res.data) {
            setContact(res.data.contact);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <Header
          contact={contact && contact}
          settings={settings}
          drawerAction={() => setDrawer(!drawer)}
        />
        <div
          className={`w-full min-h-screen  ${
            childrenClasses || "pt-[30px] pb-[60px]"
          }`}
        >
          {children && children}
        </div>
        {subscribeData && <DiscountBanner datas={subscribeData} />}

        <Footer settings={settings} />
      </div>
    </>
  );
}
