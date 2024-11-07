"use client";
import ExampleTemplateWithProps from "@/components/Examples/ExampleTemplateWithProps";
import "./SocialMediaCard.css";
import { useState } from "react";
import {
  SocialMediaCardWithProps as Component,
  Props,
} from "./SocialMediaCardWithProps";
import { NumberInput, TextInput } from "@mantine/core";

export const SocialMediaCardWithProps = () => {
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
  return (
    <ExampleTemplateWithProps
      code={code}
      component={<Component {...state} />}
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
  );
};
