import { Button, Text } from "@/reusable-components";
import Input from "@/reusable-components/input";
import Label from "@/reusable-components/label";
import TextArea from "@/reusable-components/textarea";
import React from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpzbgqgr");

  if (state.succeeded) {
    setTimeout(() => {
    }, 5000);
    return (
      <div className=" flex flex-col justify-center space-y-4">
        <Text
          as="h6"
          variant="h6"
          className=" text-center my-2 font-extralight font-sans"
        >
          Thank you for reaching out. 🙂
        </Text>
        <Button
          size="md"
          variant="primary"
        >
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className="md:w-full">
      <form onSubmit={handleSubmit} method="post" className=" space-y-4">
        <div>
          <Label htmlFor="full_name">Full name</Label>
          <Input
            type="text"
            name="full_name"
            id="full_name"
            inputSize="md"
            placeholder="John Doe"
            className="w-full mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            inputSize="md"
            placeholder="youremail@example.com"
            className="w-full mt-2"
            required
          />
        </div>
        <TextArea label="Message" placeholder="write your message" required />

        <div className="space-x-5">
          <Button
            size="md"
            variant="outlined"
          >
            Go back
          </Button>
          <Button variant="primary" size="md" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
