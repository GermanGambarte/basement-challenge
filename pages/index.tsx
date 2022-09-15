// eslint-disable-next-line prettier/prettier
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// eslint-disable-next-line prettier/prettier
import { Product } from "../product/types";
import footer from "../public/footer.svg";
import header from "../public/header.svg";
import logo from "../public/logo-sm.png";

interface Props {
  products: Product[];
}
const Home: NextPage<Props> = ({products}) => {
  return (
    <div className=" sm:h-full bg-black md:mx-auto  max-w-screen-xl">
      <nav className="fixed w-full z-50 max-w-screen-xl mx-auto bg-black flex h-16 justify-between items-center px-5 py-12">
        <Image alt="BASEMENT logo" src={logo} />
        <button className="border rounded-full px-4 py-1 text-2xl uppercase">cart (0)</button>
      </nav>
      <header className="w-full pt-28 pb-8 py-6 flex justify-center">
        <Image alt="basement supply" src={header} />
      </header>
      <section>
        <Marquee className="border-t-2 border-b-2" gradient={false}>
          <p className="text-3xl py-3">
            &nbsp;A man can&apos;t have enough basement swag&nbsp;-&nbsp;A man can&apos;t have
            enough basement swag&nbsp;-&nbsp;A man can&apos;t have enough basement swag&nbsp;-
          </p>
        </Marquee>
      </section>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${
              product.name === "Black cap" ? "md:col-span-2 lg:col-auto" : ""
            } max-w-lg px-6 py-12 mx-auto`}
          >
            <button className="border-b-2 bg-gradient-to-t from-gray-900 flex justify-center">
              <Image alt={product.name} height={700} src={product.image} width={600} />
            </button>
            <div className=" py-2 text-3xl flex justify-between">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </main>
      <footer className="w-full px-6 py-6 flex justify-center">
        <Image alt="wear everyday" src={footer} />
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, any> = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};

export default Home;
