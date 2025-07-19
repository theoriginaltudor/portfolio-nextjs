import { FC } from "react";

interface ErrorPageProps {
  params: Promise<{ reason?: string }>;
}

const ErrorPage: FC<ErrorPageProps> = async ({ params }) => {
  const { reason } = await params;
  return (
    <p className="text-center text-red-600 mt-8">
      Sorry, something went wrong: {reason}
    </p>
  );
};

export default ErrorPage;
