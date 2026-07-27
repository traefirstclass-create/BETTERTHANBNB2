import { SignIn } from "@clerk/nextjs";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <SignIn
        initialValues={email ? { emailAddress: email } : undefined}
        appearance={{
          variables: {
            colorPrimary: "#d9a441",
            colorBackground: "#16161a",
            colorForeground: "#f5f1e6",
          },
        }}
      />
    </div>
  );
}
