"use client";
import Layer1 from "@/components/Layer1";
import LayerTwo from "@/components/LayerTwo";
import Layout from "@/components/Layout";
import Container from "@/reusable-components/container";

export default function Home() {
  return (
    <Layout description="Emmanuel Essien is a FullStack Developer & Security Analyst">
      <Container className="px-4 pt-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full pb-10">
          <Layer1 />
          <LayerTwo />
        </div>
      </Container>
    </Layout>
  );
}
