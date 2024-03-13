import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Banner />
    </div>
  );
}

const Banner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-160px)] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(/assets/banner-home.jpg)` }}>
      <div className="w-full h-full absolute top-0 left-0 bg-black/[50%]">
        <Container className="h-full py-8 flex flex-col gap-4">
          <Link href="/listings">
            <Button type="button" className="w-[150px] rounded-full">Listings</Button>
          </Link>
          <div className="text-center">
            <p className="text-4xl text-primary brightness-200 font-bold">Newest Listings</p>
          </div>
          <div className="w-[90%] mx-auto bg-black/[40%] rounded-md p-4">

          </div>
        </Container>
      </div>
    </div>
  )
}