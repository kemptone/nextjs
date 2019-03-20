import Link from "next/link";
import Header from "../components/header";
import { LARGE_FARD, OTHER_LARGE_FARD } from "../enums"


function Index() {
  return (
    <main>
      <Header />
      <section>
        <p>
          {LARGE_FARD}
        </p>
        <p>
          {OTHER_LARGE_FARD}
        </p>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
