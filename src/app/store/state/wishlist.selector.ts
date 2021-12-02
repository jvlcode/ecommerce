import { createFeatureSelector } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";

export const selectWishlistItems = createFeatureSelector<ReadonlyArray<{product:ProductModel}>>('wishlist')
