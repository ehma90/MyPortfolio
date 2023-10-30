import { useGlobalContext } from '@/providers/global.provider';
import { Button } from '@/reusable-components';
import Input from '@/reusable-components/input';
import Label from '@/reusable-components/label';
import Spinner from '@/reusable-components/spinner';
import TextArea from '@/reusable-components/textarea';
import React, { useCallback, useState } from 'react'

const ContactForm = () => {
    const { setShowContact } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setShowContact(false);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <form action="https://formspree.io/f/mpzbgqgr" method="post" className=" space-y-4">
          <div>
            <Label id="full_name">Full name</Label>
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
            <Label id="email">Email</Label>
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
          <TextArea label="Message" id="message" placeholder="write your message" required/>

          <Button variant="primary" size="md" type="submit">
            {!loading ? "Submit" : <Spinner color="white" />}
          </Button>
        </form>
  )
}

export default ContactForm