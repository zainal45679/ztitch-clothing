"use client";

import React, { ReactNode, useState } from "react";

import { CartProvider } from "react-use-cart";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

const ProviderClient = ({ children }: Props) => {
  const [queryClient] = useState(
    () => new QueryClient()
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
      </CartProvider>
    </QueryClientProvider>
  );
};

export default ProviderClient;