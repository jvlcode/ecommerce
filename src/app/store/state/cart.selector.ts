import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";

export const selectCartItems = createFeatureSelector<ReadonlyArray<{product:ProductModel,qty:number}>>('cart')
