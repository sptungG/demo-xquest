import React from "react";
import { useForm } from "react-hook-form";
import { TQuest, useStoreActions } from "../contexts/page-store";
import { cn } from "../../../utils/utils";
import { PlusSvg, StarSvg } from "../../../assets";
import { toast } from "react-toastify";

type TCreateQuestCardProps = { className?: string; onFormSubmit?: (data: TQuest) => void; selectedCategory?: string; onCancel?: () => void };

const CreateQuestCard = ({ className, selectedCategory, onFormSubmit, onCancel }: TCreateQuestCardProps) => {
  const addQuest = useStoreActions((a) => a.addQuest);

  const { register, handleSubmit, reset } = useForm<TQuest>({
    defaultValues: { name: "", desc: "", star: 0, type: "ONCE", category: selectedCategory },
  });

  const handleSubmitForm = handleSubmit((formData) => {
    addQuest(formData);
    toast.success(`Quest ${selectedCategory} created successfully`);
    reset();
    onFormSubmit?.(formData);
  });

  return (
    <form
      className={cn(
        "relative p-2 lg:p-5 flex flex-col border border-primary-200 bg-primary-50 rounded-lg h-44 lg:h-[300px] col-span-2 xl:col-span-1",
        className
      )}
      onSubmit={handleSubmitForm}
    >
      <div className="flex-[1_1_auto] min-h-0 flex-col flex">
        <input className="mb-3 font-[500] text-neutral-900" placeholder="Enter Name *..." {...register("name", { required: true })} />
        <input className="text-neutral-700 text-sm" placeholder="Enter Description..." {...register("desc", { required: false })} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-center space-x-2">
          <span className="bg-secondary-100 size-6 flex-center rounded-lg">
            <StarSvg className="size-3" />
          </span>
          <input
            className="text-secondary-500 h-6font-[500] w-[80px]"
            placeholder="Enter Star..."
            type="number"
            {...register("star", { valueAsNumber: true })}
          />
        </div>

        <div className="flex-center space-x-2 h-6 p-1.5 rounded-lg bg-primary-100 text-neutral-500 uppercase text-xs">
          <select {...register("type")}>
            <option value="ONCE">ONCE</option>
            <option value="DAILY">DAILY</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mt-5 space-x-3 justify-end">
        <button
          type="button"
          className="flex-center bg-neutral-200 text-neutral-800 rounded-lg font-[500] px-5 h-9 text-sm"
          onClick={() => {
            reset();
            onCancel?.();
          }}
        >
          Cancel
        </button>
        <button type="submit" className="flex-center text-white bg-primary-600 rounded-lg font-[500] px-5 h-9 text-sm">
          <PlusSvg className="size-5" /> Create Quest
        </button>
      </div>
    </form>
  );
};

export default CreateQuestCard;
