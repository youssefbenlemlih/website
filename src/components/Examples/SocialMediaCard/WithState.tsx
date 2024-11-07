"use client";
import ExampleTemplateWithProps from "@/components/Examples/ExampleTemplateWithProps";
import { useEffect, useState } from "react";
import { NumberInput, TextInput } from "@mantine/core";
import { type Props, SocialMediaCard } from "./SocialMediaCard";
import dayjs from "dayjs";
import { useDebounceCallback } from "usehooks-ts";

const useLog = () => {
  const [tmp, setTmp] = useState<string>();
  const [logs, setLogs] = useState("");
  const writeLog = useDebounceCallback((s: string) => {
    const now = dayjs();

    // Format the date and time as YYYY-MM-DD HH:mm:ss
    const formattedDateTime = now.format("YYYY-MM-DD HH:mm:ss");

    // Combine the formatted date-time and message
    const logMessage = `[${formattedDateTime}] - ${tmp}\n`;
    setLogs((p) => p + logMessage);
    setTmp(undefined);
  }, 5000);

  useEffect(() => {
    if (tmp) {
      writeLog(tmp);
    }
  }, [tmp]);
  return { logMessage: setTmp, logs };
};
export const WithState = () => {
  const [state, setState] = useState<Props>({
    userName: "Youssef",
    userImageUrl: "/images/demos/social-media-feed/profile.png",
    text: "React is the best Framework 🤩⚛️",
    likesCount: 1,
    resharesCount: 2,
    commentsCount: 3,
  });
  const code = `<SocialMediaCard
     userName={"${state.userName}"}
     userImageUrl={"${state.userImageUrl}"}
     text={"${state.text}"}
     likesCount={${state.likesCount}}
     resharesCount={${state.resharesCount}}
     resharesCount={${state.resharesCount}}
     commentsCount={${state.commentsCount}}
  />`;

  const { logMessage, logs } = useLog();
  return (
    <>
      <ExampleTemplateWithProps
        code={logs}
        component={<SocialMediaCard {...state} />}
        propsEditor={
          <>
            <TextInput
              label="userName"
              value={state.userName}
              onChange={(event) =>
                setState({ ...state, userName: event.currentTarget.value })
              }
            />
            <TextInput
              label="userImageUrl"
              value={state.userImageUrl}
              onChange={(event) =>
                setState({ ...state, userImageUrl: event.currentTarget.value })
              }
            />
            <TextInput
              label="text"
              value={state.text}
              onChange={(event) =>
                setState({ ...state, text: event.currentTarget.value })
              }
            />
            <NumberInput
              label="likesCount"
              value={state.likesCount}
              onChange={(value) =>
                setState({ ...state, likesCount: Number(value) })
              }
            />
            <NumberInput
              label="resharesCount"
              value={state.resharesCount}
              onChange={(value) =>
                setState({ ...state, resharesCount: Number(value) })
              }
            />
            <NumberInput
              label="commentsCount"
              value={state.commentsCount}
              onChange={(value) =>
                setState({ ...state, commentsCount: Number(value) })
              }
            />
          </>
        }
      />
    </>
  );
};
