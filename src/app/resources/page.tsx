import { permanentRedirect } from "next/navigation";

const Page = () => {
  permanentRedirect(`/frontend-kit`); // Navigate to the new user profile
};
export default Page;
