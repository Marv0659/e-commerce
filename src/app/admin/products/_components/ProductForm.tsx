"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formaters";
import { useState } from "react";
import { addProduct } from "../../_actions/products";

export function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<Number>();
  return (
    <form action={addProduct} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input type="number" id="priceInCents" name="priceInCents" required value={priceInCents} onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}></Input>
      </div>
      <div className="text-muted-foreground">{formatCurrency((priceInCents || 0) / 100)}</div>
      <div className="space-y-2">
        <Label htmlFor="decsription">decsription</Label>
        <Textarea id="decsription" name="decsription" required></Textarea>
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="Image" name="Image" required></Input>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
}
