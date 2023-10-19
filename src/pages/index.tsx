import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import { Image, Text } from "@/tw-components";
import Container from "@/tw-components/container";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Container className="px-4 md:px-0">
          <div className="mt-12 md:mt-32">
            <Title />
            <div className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-9">
              <Profile />
              <div className=" border-4 md:border-8 border-green-900 rounded-[16px]">
                <Image
                  src="/assets/Emmanuel.jpeg"
                  width={500}
                  height={500}
                  alt="My photo"
                  className=" object-cover w-full h-full rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
