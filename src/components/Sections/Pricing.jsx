import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
            At Leetmorph Technology Pvt. Ltd, we offer transparent and flexible pricing plans to meet your specific needs. Explore our options below:
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="रू. 7,999/mo"
                title="Starter"
                text="We offer single information page for your business in minimal and realaible cost with great user inferface and designs."
                offers={[
                  { name: "Light Scale Configuration", cheked: true },
                  { name: "No setup or hidden fees", cheked: true },
                  { name: "Free Maintenance: 15 Days", cheked: true },
                  { name: "Domain Name", cheked: false },
                  { name: "Hosting", cheked: false },
                  { name: "SEO Optimization", cheked: false },
                  
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="रू. 14,999/mo"
                title="Medium Scale"
                text="We offer multi page website for your business in minimal and realaible cost with great user inferface and designs."
                offers={[
                  { name: "Mid Scale Configuration", cheked: true },
                  { name: "No setup or hidden fees", cheked: true },
                  { name: "Free Maintenance: 30 Days", cheked: true },
                  { name: "Domain Name", cheked: true },
                  { name: "Hosting", cheked: false },
                  { name: "SEO Optimization", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="रू. 34,999/mo"
                title="Large Scale"
                text="We offer ecommerce website with admin panel for your business in reasonable cost with great user inferface and designs."
                offers={[
                  { name: "Large Scale Configuration", cheked: true },
                  { name: "No setup or hidden fees", cheked: true },
                  { name: "Free Maintenance: 45 Days", cheked: true },
                  { name: "Domain Name", cheked: true },
                  { name: "Hosting", cheked: true },
                  { name: "SEO Optimization", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




