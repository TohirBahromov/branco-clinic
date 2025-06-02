"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import { post_uri } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { AppLang } from "@/lib/types";
import appointment from "@/lang/appointment.json";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import Flexbox from "@/components/ui/box";
import { formatPhoneNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  lang: AppLang;
}
export interface Inputs {
  name: string;
  phone: string;
  date: string;
  time: string;
  branch: string;
}

const Form = ({ lang }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const appointmentSchema = z.object({
    name: z.string().nonempty({ message: appointment.name.error.empty[lang] }),
    phone: z
      .string()
      .nonempty({ message: appointment.phone.error.empty[lang] })
      .min(12, { message: appointment.phone.error.incorrect[lang] })
      .max(12, { message: appointment.phone.error.incorrect[lang] }),
    date: z.string().nonempty({ message: appointment.date.error.empty[lang] }),
    time: z.string().nonempty({ message: appointment.time.error.empty[lang] }),
    branch: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      branch: "Yunusobod",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const message = `
      Ism: ${data.name},
      Telefon raqam: +998${data.phone.split(" ").join("")},
      Sana: ${data.date},
      Vaqt: ${data.time},
      Filial: ${data.branch}
    `;
    const settings = {
      chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
      text: message,
    };
    setLoading(true);
    const res = await axios.post(post_uri, settings);
    setLoading(false);
    reset();
    toast({
      title: appointment.successful[lang],
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 lg:p-5 md:px-0 md:pt-0 md:pb-10 rounded-[40px] flex flex-col gap-5"
    >
      <h1 className="text-lg font-medium mb-8">{appointment.title[lang]}</h1>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <Flexbox align="col" center={false}>
                <Input
                  {...field}
                  placeholder={appointment.name.placeholder[lang]}
                  type="text"
                  className={`${
                    errors.name?.message ? "border-red-500" : "border-divider"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </span>
                )}
              </Flexbox>
            );
          }}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => {
            return (
              <Flexbox align="col" center={false} className="relative">
                <div className="absolute left-0 top-0 h-[57px] aspect-square flex items-center justify-end pointer-events-none">
                  +998
                </div>
                <Input
                  {...field}
                  placeholder={appointment.phone.placeholder[lang]}
                  type="text"
                  onChange={(e) =>
                    field.onChange(formatPhoneNumber(e.target.value))
                  }
                  className={`pl-[60px] ${
                    errors.phone?.message ? "border-red-500" : "border-divider"
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </Flexbox>
            );
          }}
        />
        <Controller
          name="date"
          control={control}
          render={({ field }) => {
            return (
              <Flexbox align="col" center={false}>
                <Input
                  {...field}
                  placeholder={appointment.date.placeholder[lang]}
                  type="date"
                  className={`w-full ${
                    errors.date?.message ? "border-red-500" : "border-divider"
                  }`}
                />
                {errors.date && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.date.message}
                  </span>
                )}
              </Flexbox>
            );
          }}
        />
        <Controller
          name="time"
          control={control}
          render={({ field }) => {
            return (
              <Flexbox align="col" center={false}>
                <select
                  {...field}
                  className={`h-[56px] border border-divider px-5 rounded-[40px] ${
                    errors.time?.message ? "border-red-500" : "border-divider"
                  }`}
                >
                  <option value="" disabled>
                    {appointment.time.placeholder[lang]}
                  </option>
                  <option value="10:00-11:00">10:00-11:00</option>
                  <option value="11:00-12:00">11:00-12:00</option>
                  <option value="12:00-13:00">12:00-13:00</option>
                  <option value="13:00-14:00">13:00-14:00</option>
                  <option value="14:00-15:00">14:00-15:00</option>
                </select>
                {errors.time && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.time.message}
                  </span>
                )}
              </Flexbox>
            );
          }}
        />
        <label className="col-span-2 lg:col-span-1">
          {appointment["branch-question"][lang]}
        </label>
        <Controller
          name="branch"
          control={control}
          render={({ field }) => {
            return (
              <>
                <div className="col-span-2 lg:col-span-1 flex items-center gap-2">
                  {appointment.branch.map((item, index) => (
                    <div
                      key={index}
                      className={`flex-1 h-[44px] px-5 border rounded-2xl flex items-center justify-center border-accent duration-300 cursor-pointer ${
                        field.value === item.address.uz
                          ? "bg-accent text-white"
                          : "bg-transparent text-accent"
                      }`}
                      onClick={() => field.onChange(item.address.uz)}
                    >
                      {item.address[lang]}
                    </div>
                  ))}
                </div>
                {errors.branch && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.branch.message}
                  </span>
                )}
              </>
            );
          }}
        />
      </div>
      <Button className="w-max md:w-full" disabled={loading}>
        {appointment.button[lang]}
        {loading && (
          <div className="w-[17px] h-[17px] rounded-full animate-spin border-[2px] border-white"></div>
        )}
      </Button>
    </form>
  );
};

export default Form;
