import { useEffect } from "react";
import { Heading, Page, Button, Card, List } from "@shopify/polaris";
import { useQuery, useLazyQuery } from "react-apollo";
import gql from "graphql-tag";

const Index = () => {
  const [getShop, { data, error, loading }] = useLazyQuery(
    gql`
      query {
        shop {
          name
          email
          description
          myshopifyDomain
          primaryDomain {
            sslEnabled
            url
          }
        }
      }
    `
  );
  console.log(loading, data, error);
  return (
    <Page>
      <Heading>Shopify app with Node and React 🎉</Heading>
      <Card
        title="ストアの情報"
        primaryFooterAction={{
          content: "ストアの情報を取得する",
          onAction: getShop,
        }}
      >
        <Card.Section title="取得結果">
          <List>
            <List.Item>{data?.shop?.name || "未取得"}</List.Item>
          </List>
        </Card.Section>
      </Card>
    </Page>
  );
};

export default Index;
