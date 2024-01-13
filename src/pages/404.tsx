import Layout from "@/components/Layout";
import { Button, Link, Text } from "@/reusable-components";

export default function Error404Page() {
  return (
    <Layout title="Page not found" showNavbar footer>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <Text as="p" variant="p" className="mt-6 leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </Text>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="primary" href="/" className="text-sm font-semibold text-gray-900">
              Go to home <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
