import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import UseMenu from "../../../Hooks/UseMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <Cover img={orderImg} title={"Our order"}></Cover>
      <Tabs
        className="mt-5"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center items-center py-5">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTabs items={salads}></OrderTabs>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
