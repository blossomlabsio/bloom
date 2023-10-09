import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorContainer, ErrorMessage } from './styled';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    console.error('error===>', error);
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <ErrorContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  );
}
