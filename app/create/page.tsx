import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession();
  if (!session) return redirect('/');

  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        This page is protected with server side authentication. You can use{' '}
        <a href="https://next-auth.js.org/getting-started/client">client side authentication</a> to
        protect pages too.
      </p>
    </div>
  );
}
