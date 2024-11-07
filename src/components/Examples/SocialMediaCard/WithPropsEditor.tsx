"use client";
import ExampleTemplateWithProps from "@/components/Examples/ExampleTemplateWithProps";
import { useState } from "react";
import { NumberInput, TextInput } from "@mantine/core";
import { defaultProps } from "./defaultProps";
import { Props, SocialMediaCard } from "./SocialMediaCard";

export const WithPropsEditor = () => {
  const [state, setState] = useState<Props>(defaultProps);
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
  );
};
