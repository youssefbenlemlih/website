"use client";
import { useState } from "react";
import { Button, Card, Checkbox, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";

const formUrl = "https://store.youssefbee.com/email-subscribe/external";
const redirectUrl = "/landings/newsletter-joined";

export function NewsLetterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: undefined,
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      termsOfService: (value) => value && "You're a bot!",
    },
  });
  const onSubmit = async (values: {
    email: string;
    name?: string;
    termsOfService: boolean;
  }) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("email", values.email);
      values.name && formData.append("name", values.name);
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
      });

      setLoading(false);

      if (response.ok) {
        // Redirect the subscriber
        router.push(redirectUrl);
      } else {
        // Something went wrong subscribing the user
        form.setErrors({ email: "Sorry, we couldn't subscribe you." });
      }
    } catch (error) {
      setLoading(false);
      form.setErrors({ email: "Sorry, there was an issue: " + error });
    }
  };
  return (
    <>
      <Card withBorder className="mx-auto my-16  max-w-xl p-5">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <TextInput
            withAsterisk
            className=""
            label="Email"
            placeholder="your@email.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <Checkbox
            mt="md"
            display={"none"}
            label="I agree to the privacy policy"
            key={form.key("termsOfService")}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <Button fullWidth loading={loading} type="submit" mt="md">
            Join
          </Button>
        </form>
      </Card>
    </>
  );
}
