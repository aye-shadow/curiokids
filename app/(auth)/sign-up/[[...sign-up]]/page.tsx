import { SignUp } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

export default async function Page() {
  const user = await checkUser();

  return (
    <div className="flex items-center justify-center h-full">
      <SignUp afterSignInUrl={"/student-profile"} afterSignOutUrl="/" />
    </div>
  );
}
