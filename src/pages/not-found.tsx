import { NotFound } from '@/components/reusable/not-found';
import { SEO } from '@/components/reusable/seo';
import { SEO_DESCRIPTION, SEO_KEYWORDS } from '@/lib/constants';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Rahman Haroon"
        description={SEO_DESCRIPTION}
        keywords={SEO_KEYWORDS}
      />
      <NotFound />
    </>
  );
}
