import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { HeroTitle } from '../components/Hero/Hero';

export default async function Page() {
  const session = await getServerSession();
  if (session) return redirect('/create');
  return (
    <div>
      <HeroTitle />
    </div>
  );
}
