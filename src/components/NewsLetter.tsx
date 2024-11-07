"use client";
import { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Group,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";

const formUrl = "https://store.youssefbee.com/email-subscribe/external";
const redirectUrl = "/landings/newsletter-joined";

export function NewsLetter({ minimal }: { minimal?: boolean }) {
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
    <Card
      withBorder
      shadow="sm"
      className={
        "newsletter rounded-md " + (minimal ? "max-w-[30ch]  p-6 " : "p-12")
      }
    >
      <div className={"pb-5 "}>
        <div>
          <Title order={minimal ? 5 : 3} c="primary.4">
            The Frontend Newsletter
          </Title>
          {!minimal && (
            <Text className={"pt-2 "}>
              Receive actionable tips regarding{" "}
              <Text fw={500} span>
                React
              </Text>
              ,{" "}
              <Text fw={500} span>
                TypeScript
              </Text>{" "}
              and{" "}
              <Text span fw={500}>
                NextJS
              </Text>
              , directly in your inbox.
            </Text>
          )}
        </div>
      </div>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        {!minimal && (
          <TextInput
            label="Name"
            placeholder="Your name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        )}
        <TextInput
          withAsterisk
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
        <Group justify="flex-end" mt="md">
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Group>
      </form>
      <Text c="dimmed" size="sm">
        Unsubscribe easily anytime
      </Text>
    </Card>
  );
}
