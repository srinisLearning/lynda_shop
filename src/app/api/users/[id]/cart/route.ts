import { NextRequest } from "next/server";
import { products } from "@/utils/data/productData";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["1", "2"],
  "2": ["3", "4"],
  "3": ["6"],
};

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productIds = carts[userId];

  if (productIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartProducts = productIds.map((id) =>
    products.find((p) => p.id === Number(id))
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type CartBody = {
  productId: string;
};

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === Number(id))
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId]
    ? carts[userId].filter((pid) => pid !== productId)
    : [];
  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === Number(id))
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
