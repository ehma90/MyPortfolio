import Layout from "@/components/Layout";
import { Text } from "@/tw-components";
import Container from "@/tw-components/container";

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <div
            className="my-[100px] px-10 md:px-0"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Text
              as="h1"
              variant="h1"
              className="text-3xl md:text-6xl my-2 font-extralight"
            >
              <span className="font-bold text-blue">Emmanuel</span> Essien
            </Text>
            <p className="font-medium md:text-2xl">Software Engineer</p>
            <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[85px] md:w-[121px] border border-green-900"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {/* <Profile /> */}
          </div>
        </Container>
      </Layout>
    </>
  );
}
