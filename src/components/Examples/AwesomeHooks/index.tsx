import { Clipboard } from "@/components/Examples/AwesomeHooks/Clipboard";
import { Debouce } from "@/components/Examples/AwesomeHooks/Debouce";
import { EventListener } from "@/components/Examples/AwesomeHooks/EventListener";
import { Hover } from "@/components/Examples/AwesomeHooks/Hover";
import { IntersectionObserver } from "@/components/Examples/AwesomeHooks/IntersectionObserver";
import { Interval } from "@/components/Examples/AwesomeHooks/Interval";
import { MediaQuery } from "@/components/Examples/AwesomeHooks/MediaQuery";
import { WindowSize } from "@/components/Examples/AwesomeHooks/WindowSize";
import { WithLocalStorage } from "@/components/Examples/AwesomeHooks/WithLocalStorage";
import ExampleTemplate from "@/components/Examples/ExampleTemplate";

export const AwesomeHooks = {
  WithLocalStorage: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/WithLocalStorage.tsx"}
      component={<WithLocalStorage />}
    />
  ),
  Debouce: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/Debouce.tsx"}
      component={<Debouce />}
    />
  ),
  EventListener: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/ClickNotifications.tsx"}
      component={<EventListener />}
    />
  ),
  WindowSize: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/WindowSize.tsx"}
      component={<WindowSize />}
    />
  ),
  Hover: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/Hover.tsx"}
      component={<Hover />}
    />
  ),
  IntersectionObserver: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/IntersectionObserver.tsx"}
      component={<IntersectionObserver />}
    />
  ),
  MediaQuery: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/MediaQuery.tsx"}
      component={<MediaQuery />}
    />
  ),
  Interval: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/Interval.tsx"}
      component={<Interval />}
    />
  ),
  Clipboard: () => (
    <ExampleTemplate
      file={"/src/components/Examples/AwesomeHooks/Clipboard.tsx"}
      component={<Clipboard />}
    />
  ),
};
