import { permanentRedirect } from "next/navigation";

const Page = () => {
  permanentRedirect(`/resources/frontend-kit`); // Navigate to the new user profile
};
export default Page;
