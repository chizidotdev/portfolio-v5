import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Link } from "@solidjs/router";

export default function NotFound() {
  return (
    <section class="py-20 space-y-2">
      <Text variant="h2">404: Page not found</Text>
      <Text class="pb-6">
        The page you are looking for does not exist. Please check the URL and try again.
      </Text>

      <Link href="/">
        <Button variant="link">Back to home</Button>
      </Link>
    </section>
  );
}
