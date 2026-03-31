import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import productsData from "@/data/products.json";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@clerk/react";

const ReviewPage = () => {
  const { isSignedIn } = useSession();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const currentStore = productsData.stores.find(
    (store) => store.category === selectedCategory,
  );

  if (!isSignedIn) {
    navigate("/");
    return null;
  }

  return (
    <div className="space-y-8">
      <div>
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Submit a Customer Review</CardTitle>
              <CardDescription>
                Choose a product and submit a customer review to see how AI
                analyzes it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <div>
                  <Select
                    value={selectedCategory}
                    onValueChange={(value) => {
                      setSelectedCategory(value);
                      setSelectedItem("");
                    }}
                  >
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {productsData.stores.map((store) => (
                          <SelectItem
                            key={store.category}
                            value={store.category}
                          >
                            {store.category}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select
                    value={selectedItem}
                    onValueChange={setSelectedItem}
                    disabled={!selectedCategory}
                  >
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentStore && (
                        <SelectGroup>
                          <SelectLabel>{selectedCategory} Items</SelectLabel>
                          {currentStore.items.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea placeholder="Write your review here" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeftIcon /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewPage;
