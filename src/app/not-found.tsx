'use client'

import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="flex flex-col gap-4 text-center">
        <Player
          src='/lottie/not-found.json'
          style={{ height: 250, width: 450 }}
          autoplay
          loop
        />
        <p>
          A página que você está tentando acessar não existe.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button>
              Página inicial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
