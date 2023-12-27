"use client";

import React, { useState } from "react";
import Input from "../../../components/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "@/components/Button";
import Container from "../../../components/Container";
import Heading from "../../../components/Heading";
import ImageUpload from "../../../components/ImageUpload";
import { categories } from "../../../components/categories/Categories";
import CategoryInput from "@/components/categories/CategoryInput";

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      latitude: 33.5563,
      longitude: 126.79581,
      imageSrc: "",
      price: 1,
    },
  });

  const imageSrc = watch("imageSrc");
  const category = watch("category");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value);
  };

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Product Upload" subtitle="upload your product" />
          <ImageUpload
            value={imageSrc}
            onChange={(value) => setCustomValue("imageSrc", value)}
          />
          <Input
            id="title"
            label="Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <Input
            id="price"
            label="Price"
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[50vh] overflow-y-auto">
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.path}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                />
              </div>
            ))}
          </div>
          <hr />

          <Button label="상품 생성하기" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
