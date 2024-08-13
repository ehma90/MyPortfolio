import Layer1 from "@/components/Layer1";
import Layout from "@/components/Layout";
import Container from "@/reusable-components/container";

export default function Home() {
  return (
    <>
      <Layout
        title="Emmanuel Essien"
        description="Emmanuel Essien is a Software developer & Security Analyst"
      >
        <Container className="px-4 md:px-40 flex gap-20">
          <Layer1/>
          {/* <div className="h-screen border border-white/20 "/> */}
          <p>hi</p>
        </Container>
      </Layout>
    </>
  );
}
