import Head from "next/head";
import Button from "../../components/FilterButton"
import Layout from "../../components/Layout/layout";

export default function Categorias() {
  return (
    <Layout>
      <Head>
        <title>Pan Simple</title>
      </Head>

      <main>
        <div>
          <h1>
            <span></span>
          </h1>
          <div>
              <Button />
          </div>
        </div>
      </main>
    </Layout>
  );
}
