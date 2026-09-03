import { redirect } from 'next/navigation';
import { serviceDestinations } from '@/data/traveco-service-countries';

export function generateStaticParams() {
  return serviceDestinations.map((d) => ({ slug: d.slug }));
}

export default function DocumentChecklistSlugPage() {
  redirect('/document-checklist');
}
