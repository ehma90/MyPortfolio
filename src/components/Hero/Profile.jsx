import React from "react";

function Profile() {
  return (
    <div className="mt-[150px] mb-[100px] px-10 md:px-0 text-md md:text-lg">
      <p className="leading-7">
        I'm <span className="text-green-900 font-semibold ">Emmanuel,</span> a
        software engineer that specializes in web and mobile application.
      </p>
      <p className="leading-7">
        Currently building side projects, you can find it in{" "}
        <a
          href="https://github.com/ehma90" target="_blank" rel="noreferrer"
          className="font-semibold text-green-900 underline decoration-1"
        >
          my Github
        </a>{" "}
        repository.
      </p>
      <p className="leading-7">Available for jobs and collaborations.</p>
      <p className="leading-7">
        Join me on{" "}
        <a
          href="https://twitter.com/ehmaessieen" target="_blank" rel="noreferrer"
          className="font-semibold text-green-900 underline decoration-1"
        >
          Twitter
        </a>
        , where I share tweets about things I like and memes.
      </p>
      <p className="leading-7">
        Feel free to send an{" "}
        <a
          href="mailto:ehmaessien@gmail.com" target="_blank" rel="noreferrer"
          className=" font-semibold text-green-900 underline decoration-1"
        >
          Email
        </a>{" "}
      </p>
    </div>
  );
}

export default Profile;
