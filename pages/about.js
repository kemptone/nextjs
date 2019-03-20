import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";
import {LARGE_FARD, OTHER_LARGE_FARD} from '../enums/index'


class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            { LARGE_FARD }
          </p>
          <p>
            { OTHER_LARGE_FARD }
          </p>
          <p>
            Fards were gards of lards
          </p>
          <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>
            You can reload to see how the page change.
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;