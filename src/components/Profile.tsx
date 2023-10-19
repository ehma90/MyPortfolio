import { Text, Link } from "@/tw-components";
import React from "react";

function Profile() {
  return (
    <ul className="mt-[150px] mb-[100px] px-10 md:px-0 text-md md:text-lg">
      <li>
        <Text as="p" variant="p" className="leading-7">
          I'm <span className="text-green-900 font-semibold ">Emmanuel,</span> a
          software engineer that specializes in web and mobile application.
        </Text>
      </li>
      <li>
        <Text as="p" variant="p" className="leading-7">
          Currently building side projects, you can find it in{" "}
          <a
            href="https://github.com/ehma90"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-green-900 underline decoration-1"
          >
            my Github
          </a>{" "}
          repository.
        </Text>
      </li>
      <li>
        <Text as="p" variant="p" className="leading-7">
          Available for jobs and collaborations.
        </Text>
      </li>
      <li>
        <Text as="p" variant="p" className="leading-7">
          Join me on{" "}
          <a
            href="https://twitter.com/ehmaessieen"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-green-900 underline decoration-1"
          >
            Twitter
          </a>
          , where I share tweets about things I like and memes.
        </Text>
      </li>
      <li>
      <Text as="p" variant="p" className="leading-7">
        Feel free to send an{" "}
        <Link
          external
          href="mailto:ehmaessien@gmail.com"
          target="_blank"
          rel="noreferrer"
          className=" font-semibold text-green-900 underline decoration-1"
        >
          Email
        </Link>{" "}
      </Text>
      </li>
    </ul>
  );
}

export default Profile;
