import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ItemEntity } from "./items.reducer";

export const ItemsActions = createActionGroup({
  source: "Items",
  events: {
    "Load Items": emptyProps(),
    "Load Items Success": props<{ item: ItemEntity[] }>(),
    "Create Item": props<{ item: ItemEntity }>(),
    "Create Item Success": props<{ item: ItemEntity }>(),
  },
});
